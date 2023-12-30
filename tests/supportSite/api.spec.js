// import {test, expect} from "@playwright/test";
// import sql from "mssql";
import {test, expect} from "../fixtures/database";

// const config = {
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     server: process.env.SERVER,
//     database: process.env.DATABASE
// };

                            // kết nối trực tiếp DB ở file này
// test('GetListCategories', async ({ page, request }) => {
//     let categoryResponse = await request.get(`${process.env.SUPPORT_URL}/api/kbr/GetListCSFAQCategories`);
//     await expect(categoryResponse).toBeOK();
//     let categorydata = await categoryResponse.json();
//     // console.log(categorydata)
//     await sql.connect(config);
//     const result = await sql.query(`SELECT DISTINCT krc.id, krc.Name as name FROM [dbo].[KnowledgeBaseResourcesCategories] krc
//     JOIN KnowledgeBaseResourcesSubCategories krs on krs.CategoryId = krc.Id
//     JOIN KnowledgeBaseResourcesArticles kra on kra.CategoryId = krs.Id
//     WHERE kra.Type = 1
//     ORDER BY krc.Name asc`);
//     const record = result.recordset;
//     expect(categorydata.data).toEqual(record);
//     // console.log(result);
//     await sql.close();
// })

// test('Get list categories structure', async ({request}) => {
//     let listCategoryResponse = await request.get(`${process.env.SUPPORT_URL}/api/kbr/GetListCategoriesStructure`);
//     await expect(listCategoryResponse).toBeOK();
//     let listCategoryData = await listCategoryResponse.json();
//     // console.log(listCategoryData)
//     await sql.connect(config);
//     const result = await sql.query(`SELECT DISTINCT krc.id, krc.Name as name, krs.id as subId, krs.Name as subName 
//     FROM [dbo].[KnowledgeBaseResourcesCategories] krc
//     JOIN KnowledgeBaseResourcesSubCategories krs on krs.CategoryId = krc.Id
//     JOIN KnowledgeBaseResourcesArticles kra on kra.CategoryId = krs.Id
//     WHERE kra.Type = 1
//     ORDER BY krc.Name asc, krs.Name asc`);

//     //Cách 1: rã api ra thành từng row
//     // // console.log(result)
//     // let catArr = []
//     // listCategoryData.data.forEach(item => {
//     //     item.subCategories.forEach(sub => {
//     //         let cat = {
//     //             id: item.id,
//     //             name: item.name,
//     //             subId: sub.id,
//     //             subName: sub.name
//     //         }
//     //         catArr.push(cat)
//     //     })
//     // });
//     // // console.log(catArr)
//     // await expect(catArr).toEqual(result.recordset)

//     //Cách 2: Gộp DB thành từng object giống api
//     //map: vòng lặp cho phép trả về mảng mới
//     let catArr = [];
//     result.recordset.forEach(item => {
//         if(catArr.find(c => c.id == item.id)==undefined){
//             let cat = {
//                 id: item.id,
//                 name: item.name,
//                 subCategories: result.recordset.filter(sub => sub.id == item.id).map(c => {
//                     let subcat ={
//                         id: c.subId,
//                         name: c.subName
//                     }
//                     return subcat;
//                 })
//             }
//             catArr.push(cat)
//         }
//     })
//     console.log(catArr)
// })

//Dùng fixtures
test('GetListCategories', async ({ request, dataFactory }) => {
    let categoryResponse = await request.get(`${process.env.SUPPORT_URL}/api/kbr/GetListCSFAQCategories`);
    await expect(categoryResponse).toBeOK();
    let categorydata = await categoryResponse.json();
    // console.log(categorydata)
    const result = await dataFactory.query(`SELECT DISTINCT krc.id, krc.Name as name FROM [dbo].[KnowledgeBaseResourcesCategories] krc
    JOIN KnowledgeBaseResourcesSubCategories krs on krs.CategoryId = krc.Id
    JOIN KnowledgeBaseResourcesArticles kra on kra.CategoryId = krs.Id
    WHERE kra.Type = 1
    ORDER BY krc.Name asc`);
    const record = result.recordset;
    expect(categorydata.data).toEqual(record);
    // console.log(result);
})
//topSearch()

test('Search', async({request, dataFactory})=> {
    let page = 1;
    let pageSize = 15;
    let searchTextValue = "keto kit";
    let apiResponse = await request.get(`${process.env.SUPPORT_URL}/api/kbr/search?searchText=${encodeURIComponent(searchTextValue)}&page=${page}&pageSize=${pageSize}`);
    await expect(apiResponse).toBeOK();
    let dataResponse = await apiResponse.json();

    let selectQuery = `SELECT krc.id as categoryId, krc.Name as categoryName, krs.id as subCategoryId, krs.Name as subCategoryName , kra.Title as title, kra.Description as description, kra.Slug as slug, kra.id as id, typeDescription = 'faqs'`
    let conditionQuery = `FROM [dbo].[KnowledgeBaseResourcesCategories] krc
    JOIN KnowledgeBaseResourcesSubCategories krs on krs.CategoryId = krc.Id
    JOIN KnowledgeBaseResourcesArticles kra on kra.CategoryId = krs.Id
    WHERE kra.Type = 1 `
    let keywords = searchTextValue.trim().replaceAll(/\s+/g, ' ').replaceAll(",","").split(" ").filter(c =>c);
    if(keywords && keywords.length){
        keywords.forEach(c => {
                conditionQuery += `AND kra.SearchField like '%${c}%' ` ;
            })
    } 
    const result = await dataFactory.query(`${selectQuery} ${conditionQuery} 
    ORDER BY krc.Name, kra.CreatedOn DESC
    OFFSET ${pageSize*(page - 1)} ROWS FETCH NEXT ${pageSize} ROWS ONLY`); 
    
    const total = await dataFactory.query(`SELECT COUNT (DISTINCT kra.Id) as total ${conditionQuery}`);
    // console.log(result);
    // console.log(total);
    // console.log(dataResponse);
    expect(result.recordset).toEqual(dataResponse.data);
    expect(total.recordset[0]?.total).toEqual(dataResponse.total)
})


