import { test, expect } from '@playwright/test';
// let rq;
// test('api-get', async ({request}) => {
//     let data = {
//         name: '',
//         gia: 0
//     };
//     request.storageState();
//     rq = request;
//     const response = await request.get("https://dev-pim-drberg.azurewebsites.net/api/products/search-by-name", {
//         params: {
//             'data[0][sku]': 'keto',
//             'data[0][qty]': '2',
           
//         }
//     });
//     expect(response.status()).toBe(200);
//     const body = await response.json();
//     console.log(body)
//     expect(body.data).toBeGreaterThanOrEqual(1);
 
//     expect(body.bookings[0].bookingDates.checkin).toBeValidDate();
//     expect(body.bookings[0].bookingDates.checkout).toBeValidDate();
 
   
// })
// test('', () => {
//     rq
// })

//
test('api1', async ({request}) => {
    let funnelcode = 'd3k2'
    const response = await request.get(`https://dev-pim-drberg.azurewebsites.net/api/edm/products/GetListFunnelProduct/${funnelcode}`,{
        params: {
            'data[0].sku': 'ch-vitac',
            'data[0].qty': 1,
            'data[1].sku': 'D3K2Reg',
            'data[1].qty': 1,
            'data[2].sku': 'D3K2Reg',
            'data[2].qty': 3,
            'data[3].sku': 'D3K2Reg',
            'data[3].qty': 6
        }
    });
    const body = await response.json();
    await expect(response).toBeOK();
})