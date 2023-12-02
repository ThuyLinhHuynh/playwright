import { test, expect } from '@playwright/test';

//TC01-2: [Back to drberg.com] link
test('TC01-2', async ({ page }) => {
  let link = await page.getByRole('link', { name: 'Back to drberg.com' })
await page.goto('./calculators/basal-metabolic-rate');
await page.waitForLoadState('domcontentloaded');
await expect.soft(await page.getByRole('link', { name: 'Back to drberg.com' })).toBeVisible()
await expect.soft(link).toHaveCSS('Font-family','Roboto, sans-serif')
await expect.soft(link).toHaveCSS('font-size','16px')
await expect.soft(link).toHaveCSS('color','rgb(42, 54, 62)')
});

// //TC03-4: Section title
// test('TC03-4', async ({ page }) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await expect.soft(await page.getByText('GENERAL SETTINGS')).toBeVisible()
//   await expect.soft(page.getByText('GENERAL SETTINGS')).toHaveCSS('Font-family','Roboto, sans-serif')
//   await expect.soft(page.getByText('GENERAL SETTINGS')).toHaveCSS('font-size','16px')
//   await expect.soft(page.getByText('GENERAL SETTINGS')).toHaveCSS('color','rgb(42, 54, 62)')
//   await expect.soft(page.getByText('GENERAL SETTINGS')).toHaveCSS('font-weight','700')
// });

// //TC05-8: Unit toggle
// test('TC05-8', async ({ page }) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   //await expect.soft(await page.locator('label').filter({ hasText: 'Imperial units' }).locator('span').toHaveCSS('background-color','rgb(204, 233, 238)'))
//   await expect.soft(await page.getByText('Imperial units').first()).toBeVisible()
//   await expect.soft(page.getByText('Imperial units').first()).toHaveCSS('Font-family','Roboto, sans-serif')
//   await expect.soft(page.getByText('Imperial units').first()).toHaveCSS('font-weight','400')
//   await expect.soft(page.getByText('Imperial units').first()).toHaveCSS('color','rgb(42, 54, 62)')
// });

// //TC09-13: Veirfy this options showing correctly
// test('TC09-13', async ({ page }) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await expect.soft(await page.getByText('GENDER').first()).toBeVisible()
//   await expect.soft(page.getByText('GENDER').first()).toHaveCSS('font-size','12px')
//   await expect.soft(page.getByText('GENDER').first()).toHaveCSS('color','rgb(42, 54, 62)')
//   await expect.soft(page.getByText('GENDER').first()).toHaveCSS('font-weight','700')
// });

// //TC14-17: 
// test('TC14-17', async ({ page }) => {
// await page.goto('./calculators/basal-metabolic-rate');
// await page.waitForLoadState('domcontentloaded');
// //await expect.soft(await page.getByLabel('Your Age').hover()).toHaveCSS('font-weight','400')
// await page.getByLabel('Your Age').click()
// //await expect.soft(page.getByLabel('Your Age').click())
// });

// //TC18-21: 
// test('TC18-21', async({page}) =>{
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await expect(page.getByLabel('Your height in feet')).toBeVisible();
//   await page.locator('label').filter({hasText:"Imperial units"}).click();
//   await expect(await page.getByLabel('Your height in cm')).toBeVisible();
//   await expect(page.getByLabel('Your height in cm')).toHaveCSS('font-size','16px');
//   await expect(page.getByLabel('Your height in cm')).toHaveCSS('font-weight','400');
//   await expect(page.getByLabel('Your height in cm')).toHaveCSS('color','rgb(42, 54, 62)');
//   await page.getByLabel('Your height in cm').click();
//   await expect(page.getByLabel('Your height in cm')).toHaveCSS('border-bottom-color','rgb(38, 72, 212)');
//   await page.getByLabel('Your height in cm').fill('180 cm');
//   await expect.soft(await page.getByLabel('Your height in cm').inputValue()).not.toBe('180 cm');
// });

// //TC22-23: 
// test('TC22-23', async({page}) =>{
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await expect.soft(page.getByText('Example: 5.7')).toBeVisible();
//   await page.locator('label').filter({hasText:"Imperial units"}).click();
//   await expect.soft(page.getByText('Example: 180')).toBeVisible();
//   await expect.soft(page.getByText('Example: 180')).toHaveCSS('font-size','14px');
//   await expect.soft(page.getByText('Example: 180')).toHaveCSS('font-weight','400');
//   await expect.soft(page.getByText('Example: 180')).toHaveCSS('color','rgb(93, 95, 101)');
// });

// //TC24-27:
// test('TC24-27', async({page}) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await expect.soft(page.getByLabel('Your weight in lbs')).toBeVisible();
//   await page.locator('label').filter({hasText:"Imperial units"}).click();
//   await expect(page.getByLabel('Your weight in kg')).toBeVisible();
//   await expect(page.getByLabel('Your weight in kg')).toHaveCSS('font-size','16px');
//   await expect(page.getByLabel('Your weight in kg')).toHaveCSS('font-weight','400');
//   await expect(page.getByLabel('Your weight in kg')).toHaveCSS('color','rgb(42, 54, 62)');
//   await page.getByLabel('Your weight in kg').click();
//   await expect(page.getByLabel('Your weight in kg')).toHaveCSS('border-bottom-color','rgb(38, 72, 212)');
//   await page.getByLabel('Your weight in kg').fill('45 kg');
//   await expect.soft(await page.getByLabel('Your weight in kg').inputValue()).not.toBe('45 kg');
// });

// //TC28-29:
// test('TC28-29', async({page}) =>{
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await expect.soft(page.getByText('Example: 110')).toBeVisible();
//   await page.locator('label').filter({hasText:"Imperial units"}).click();
//   await expect.soft(await page.getByText('Example: 50')).toBeVisible();
//   await expect.soft(page.getByText('Example: 50')).toHaveCSS('font-size','14px');
//   await expect.soft(page.getByText('Example: 50')).toHaveCSS('font-weight','400');
//   await expect.soft(page.getByText('Example: 50')).toHaveCSS('color','rgb(93, 95, 101)');
// });


// //TC30-31:Result section
// test('TC30-31', async({page}) =>{
// await page.goto('./calculators/basal-metabolic-rate');
// await page.waitForLoadState('domcontentloaded');
// await expect.soft(await page.getByText('Results').first()).toBeVisible()
// await expect.soft(page.getByText('Results').first()).toHaveCSS('Font-family','Roboto, sans-serif')
// await expect.soft(page.getByText('Results').first()).toHaveCSS('font-size','20px')
// await expect.soft(page.getByText('Results').first()).toHaveCSS('color','rgb(42, 54, 62)')
// await expect.soft(page.getByText('Results').first()).toHaveCSS('font-weight','700')
// });

// //TC32-34: Sharing icon button

// test('TC32-34', async({page}) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await expect.soft(await page.getByLabel('share button')).toHaveCSS('width','48px');
//   await expect.soft(await page.getByLabel('share button')).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
//   await page.getByLabel('share button').hover();
//   await expect.soft(await page.getByLabel('share button')).toHaveCSS('background-color','rgb(244, 244, 244)');
//   await expect.soft(await page.getByLabel('share button').evaluate(node => window.getComputedStyle(node, ':before').content)).toBe("\"Share\"");
//   await page.getByLabel('share button').click();
//   await expect(await page.getByText('Share this https://drberg.com/calculators/basal-metabolic-rate')).toBeVisible();
// });

// //TC35-37: Reset icon
// test('TC35-37', async({page}) =>{
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await expect.soft(await page.getByLabel('refresh button')).toHaveCSS('width','48px');
//   await expect.soft(await page.getByLabel('refresh button')).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
//   await page.getByLabel('refresh button').hover(timeout?: 30000);
//   await expect.soft(page.getByLabel('refresh button')).toHaveCSS('background-color','rgb(244, 244, 244)');
//   await expect.soft(await page.getByLabel('refresh button').evaluate(node => window.getComputedStyle(node, ':before').content)).toBe("\"Restart - clear data\"");
// });

// //TC38-39: "View other tools" text

// test('TC38-39', async({page}) =>{
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await expect.soft(page.getByText('View other tools')).toHaveCSS('font-size','12px');
//   await expect.soft(page.getByText('View other tools')).toHaveCSS('font-weight','700');
//   await expect.soft(page.getByText('View other tools')).toHaveCSS('color','rgb(42, 54, 62)');
// });

// //TC40-41: [TDEE Calculator] hyperlink

// test('TC40-41', async({page}) =>{
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await expect.soft(page.getByRole('link', { name: 'TDEE Calculator' })).toHaveText('TDEE Calculator');
//   await expect.soft(page.getByRole('link', { name: 'TDEE Calculator' })).toHaveCSS('font-size','16px');
//   await expect.soft(page.getByRole('link', { name: 'TDEE Calculator' })).toHaveCSS('font-weight','700');
//   await expect.soft(page.getByRole('link', { name: 'TDEE Calculator' })).toHaveCSS('Font-family','Roboto, sans-serif');
//   await expect.soft(page.getByRole('link', { name: 'TDEE Calculator' })).toHaveCSS('color','rgb(38, 72, 212)');
//   await page.getByRole('link', { name: 'TDEE Calculator' }).hover();
//   await expect.soft(page.getByRole('link', { name: 'TDEE Calculator' })).toHaveCSS('text-decoration-line','underline');
//   await expect.soft(page.getByRole('link', { name: 'TDEE Calculator' })).toHaveCSS('color','rgb(56, 88, 219)');
// });

// //TC42-43: [KETO Calculator] hyperlink

// test('TC42-43', async({page}) =>{
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await expect.soft(page.getByRole('link', { name: 'KETO Calculator' })).toHaveText('KETO Calculator');
//   await expect.soft(page.getByRole('link', { name: 'KETO Calculator' })).toHaveCSS('font-size','16px');
//   await expect.soft(page.getByRole('link', { name: 'KETO Calculator' })).toHaveCSS('font-weight','700');
//   await expect.soft(page.getByRole('link', { name: 'KETO Calculator' })).toHaveCSS('Font-family','Roboto, sans-serif');
//   await expect.soft(page.getByRole('link', { name: 'KETO Calculator' })).toHaveCSS('color','rgb(38, 72, 212)');
//   await page.getByRole('link', { name: 'KETO Calculator' }).hover();
//   await expect.soft(page.getByRole('link', { name: 'KETO Calculator' })).toHaveCSS('text-decoration-line','underline');
//   await expect.soft(page.getByRole('link', { name: 'KETO Calculator' })).toHaveCSS('color','rgb(56, 88, 219)');
// });

// //TC44-45: Section title

// test('TC44-45', async ({ page }) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await expect.soft(page.getByRole('heading', { name: 'BMR Calculator', exact: true })).toHaveText("BMR Calculator");
//   await expect.soft(page.getByRole('heading', { name: 'BMR Calculator', exact: true })).toHaveCSS('color','rgb(42, 54, 62)');
//   await expect.soft(page.getByRole('heading', { name: 'BMR Calculator', exact: true })).toHaveCSS('font-size','40px');
//   await expect.soft(page.getByRole('heading', { name: 'BMR Calculator', exact: true })).toHaveCSS('font-weight','700');
// });

// //TC46-47: Subtitle

// test('TC46-47', async ({ page }) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await expect.soft(page.getByText('Basal Metabolic Rate').first()).toHaveCSS('font-size','20px');
//   await expect.soft(page.getByText('Basal Metabolic Rate').first()).toHaveCSS('color','rgb(42, 54, 62)');
//   await expect.soft(page.getByText('Basal Metabolic Rate').first()).toHaveCSS('font-weight','400');
// });

// //TC48-49: Short description

// test('TC48-49', async ({ page }) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await expect.soft(page.getByText('This BMR Calculator is a simple tool that helps you calculate how many calories your body needs if you were only to rest for the whole day.').first()).toHaveCSS('color','rgb(42, 54, 62)');
//   await expect.soft(page.getByText('This BMR Calculator is a simple tool that helps you calculate how many calories your body needs if you were only to rest for the whole day.').first()).toHaveCSS('font-size','16px');
//   await expect.soft(page.getByText('This BMR Calculator is a simple tool that helps you calculate how many calories your body needs if you were only to rest for the whole day.').first()).toHaveCSS('font-weight','400');
// });

// //TC50-52: 

// test('TC50-52', async ({ page }) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await expect.soft(page.getByText('Table of Contents')).toHaveCSS('font-size','16px');
//   await expect.soft(page.getByText('Table of Contents')).toHaveCSS('color','rgb(42, 54, 62)');
//   await expect.soft(page.getByText('Table of Contents')).toHaveCSS('font-weight','700');
//   await expect.soft(page.locator('.leading-9').getByText('What does BMR mean?')).toBeVisible();
//   await expect.soft(page.locator('.leading-9').getByText('What is a BMR calculator?')).toBeVisible();
//   await expect.soft(page.locator('.leading-9').getByText('What is the purpose of a BMR calculator?')).toBeVisible();
//   await expect.soft(page.locator('.leading-9').getByText('What is the Mifflin-St. Jeor equation?')).toBeVisible();
//   await expect.soft(page.locator('.leading-9').getByText('How can this free BMR calculator help me with my Healthy Keto plan?')).toBeVisible();
// });

// //TC53-55: 

// test('TC53-55', async ({ page }) => {
// await page.goto('./calculators/basal-metabolic-rate');
// await page.waitForLoadState('domcontentloaded');
// await expect.soft(page.getByText('[ hide ]')).toHaveCSS('font-size','16px');
// await expect.soft(page.getByText('[ hide ]')).toHaveCSS('font-weight','700');
// await expect.soft(page.getByText('[ hide ]')).toHaveCSS('color','rgb(38, 72, 212)');
// await page.getByText('[ hide ]').click();
// await expect.soft(await page.getByText('[ hide ]')).not.toBeVisible();
// await expect.soft(await page.getByText('[ show ]')).toBeVisible();
// await expect.soft(page.locator('.leading-9').getByText('What does BMR mean?')).not.toBeVisible();
// await expect.soft(page.locator('.leading-9').getByText('What is a BMR calculator?')).not.toBeVisible();
// await expect.soft(page.locator('.leading-9').getByText('What is the purpose of a BMR calculator?')).not.toBeVisible();
// await expect.soft(page.locator('.leading-9').getByText('What is the Mifflin-St. Jeor equation?')).not.toBeVisible();
// await expect.soft(page.locator('.leading-9').getByText('How can this free BMR calculator help me with my Healthy Keto plan?')).not.toBeVisible();
// });

// //TC56-58
// test('TC56-58', async({page}) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await expect(page.getByText('What is a BMR calculator?').first()).toHaveCSS('font-size','16px');
//   await expect(page.getByText('What is a BMR calculator?').first()).toHaveCSS('font-weight','400');
//   await expect(page.getByText('What is a BMR calculator?').first()).toHaveCSS('color','rgb(56, 88, 219)');
//   await page.getByText('What is a BMR calculator?').first().hover();
//   await expect(page.getByText('What is a BMR calculator?').first()).toHaveCSS('color','rgb(56, 88, 219)');
//   await expect(page.getByText('What is a BMR calculator?').first()).toHaveCSS('text-decoration-line','underline');
//   await expect(page.getByText('What is a BMR calculator?').first()).toHaveCSS('font-size','16px');
// });


// // TC63: back to homepage 
// test('back to homepage ', async ({ page }) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await page.getByRole('link', { name: 'Back to drberg.com' }).click();
//   await expect(page).toHaveURL('.')
// });

// // TC64: Unit toggle

// test('TC64:Unit toggle', async ({ page }) => {
// //   await page.goto('./calculators/basal-metabolic-rate');
// //   await page.waitForLoadState('domcontentloaded');
// //   await page.getByLabel('Your height in feet').click();
// //   await page.getByLabel('Your height in feet').fill('5.5');
// //   await page.getByLabel('Your weight in lbs').click();
// //   await page.getByLabel('Your weight in lbs').fill('139');
// //   await page.locator('label').filter({ hasText: 'Imperial units' }).locator('span').click();
// // // Lấy giá trị sau khi đổi
// //   await expect(page.getByLabel('Your height in feet')).toHaveValue()

// // const heightfeet = await page.locator('[aria-label="Your height in feet"]');
// // const weightlbs = await page.locator('[aria-label="Your weight in lbs"]');
// // const Heightcm = heightfeet * 30.48;
// // const Weightkg = weightlbs * 0.453592;
// // await expect(heightfeet).toBeCloseTo(Heightcm,5)
// // await expect(weightlbs).toBeCloseTo(Weightkg,5)

// await page.goto('./calculators/basal-metabolic-rate');
//     let heightFeet = 5.5;
//     let weightLbs = 139;
//   await page.waitForLoadState('domcontentloaded');
//   await page.getByLabel('Your height in feet').click();
//   await page.getByLabel('Your height in feet').fill(heightFeet.toString());
//   await page.getByLabel('Your weight in lbs').click();
//   await page.getByLabel('Your weight in lbs').fill(weightLbs.toString());
//   await page.locator('label').filter({ hasText: 'Imperial units' }).locator('span').click();
//   await expect(+(await page.getByLabel('Your height in cm').inputValue())).toBeCloseTo(Math.round(heightFeet * 30.48));
// });

// //TC65: Age field

// test('test65', async ({ page }) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await page.getByLabel('Your Age').click();
//   await page.getByLabel('Your Age').fill('17'); // nhập số tuổi nhỏ hơn 18
//   await expect(page.getByText('This calculator will not be accurate for kids')).toBeVisible ()
// });

// // TC66: Age field

// test('test66', async ({ page }) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await page.getByLabel('Your Age').click();
//   await page.getByLabel('Your Age').fill('121'); // nhập số tuổi lớn hơn 120
//   await expect(page.getByText('Could you please double check your age?')).toBeVisible ()
// });

// // TC67: heightfeet kid

// test('test67', async ({ page }) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await page.getByLabel('Your height in feet').click();
//   await page.getByLabel('Your height in feet').fill('1.63'); // nhập chiều cao nhỏ hơn 1.64feet
//   await expect(page.getByText('This calculator will not be accurate for kids')).toBeVisible ()
// });

// // TC68: heightfeet

// test('test68', async ({ page }) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await page.getByLabel('Your height in feet').click();
//   await page.getByLabel('Your height in feet').fill('8.84'); // nhập chiều cao lớn hơn 8.83feet
//   await expect(page.getByText('Could you please double check your height?')).toBeVisible ()
// });

// // TC69: heightcm kid

// test('test69', async ({ page }) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.locator('label').filter({ hasText: 'Imperial units' }).locator('span').click();
//   await page.getByLabel('Your height in cm').click();
//   await page.getByLabel('Your height in cm').fill('49'); // nhập chiều cao nhỏ hơn 50cm
//   await expect(page.getByText('This calculator will not be accurate for kids')).toBeVisible () 
// });

// // // TC70: heightcm lớn hơn 269cm

// test('test70', async ({ page }) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await page.locator('label').filter({ hasText: 'Imperial units' }).locator('span').click();
//   await page.getByLabel('Your height in cm').click();
//   await page.getByLabel('Your height in cm').fill('270'); // nhập chiều cao lớn hơn 269cm
//   await expect(page.getByText('Could you please double check your height?')).toBeVisible ()
// });

// // TC71: weight smaller than 88lbs

// test('test771', async ({ page }) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await page.getByLabel('Your weight in lbs').click();
//   await page.getByLabel('Your weight in lbs').fill('15'); // nhập weight nhỏ hơn 88lbs
//   await expect(page.getByText('This calculator will not be accurate for kids')).toBeVisible ()
// });
// // TC72: weight greater than 1320 lbs

// test('test72', async ({ page }) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await page.getByLabel('Your weight in lbs').click();
//   await page.getByLabel('Your weight in lbs').fill('1330'); // nhập weight lớn hơn 1320 lbs
//   await expect(page.getByText('Could you please double check your weight?')).toBeVisible ()
// });


// // TC73: weight smaller than 40 kg

// test('test73', async ({ page }) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await page.locator('label').filter({ hasText: 'Imperial units' }).locator('span').click();
//   await page.getByLabel('Your weight in kg').click();
//   await page.getByLabel('Your weight in kg').fill('39'); // nhập weight nhỏ hơn 40 kg
//   await expect(page.getByText('This calculator will not be accurate for kids')).toBeVisible ()
// });

// // TC74: weight greater than 600 kg

// test('test74', async ({ page }) => {
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await page.locator('label').filter({ hasText: 'Imperial units' }).locator('span').click();
//   await page.getByLabel('Your weight in kg').click();
//   await page.getByLabel('Your weight in kg').fill('1350'); // nhập weight lớn hơn 1320 lbs
//   await expect(page.getByText('Could you please double check your weight?')).toBeVisible ()
// });

// // TC75: showing result

// test('test75', async ({ page }) => {
//   let age = 19;
//   let heightFeet = '';
//   let weightLbs = 139;
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await page.getByLabel('Your Age').click();
//   await page.getByLabel('Your Age').fill(age.toString());
//   await page.getByLabel('Your height in feet').click();
//   await page.getByLabel('Your height in feet').fill(heightFeet.toString());
//   await page.getByLabel('Your weight in lbs').click();
//   await page.getByLabel('Your weight in lbs').fill(weightLbs.toString());
//   await expect(await page.locator('.text-xl.p-5.bg-success-20 .inline-block span').innerText()).toEqual("---")
// });

// //(TEST76)
// const randomArray = (min, max, length, isRound=true) => {
//   let result = [min, max];
//   for(let i = 0; i < length; i++){
//     result.push((isRound ? Math.round(Math.random() * (max - min + 1)) : Math.random() * (max - min + 1)) + min);
//   }
//   return result;
//  }
//  test('fn76-m1',async ({page}) => {
//   let ages = randomArray(18, 120, 3);
//   let heights = randomArray(1.64, 8.83, 3, false);
//   let weights = randomArray(88, 1320, 3, false);
//   console.log(ages)
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForTimeout(3000);
//   for (let i=0; i < 5; i++) {
//     let weight = weights[Math.floor(Math.random() * weights.length)];
//     let height = heights[Math.floor(Math.random() * heights.length)];
//     await page.getByLabel('Your weight in lbs').fill(String(weight));
//     await page.getByLabel('Your height in feet').fill(String(height));
//     let age = ages[Math.floor(Math.random() * ages.length)]
//     let result= Math.round((10*(Math.round(weight/2.2))) + (6.25*Math.round((height*30.48)) - (5*age) + 5));
//     await page.getByLabel('Your Age').fill(String(age));
//     await expect.soft(await page.getByText(String(result))).toBeVisible();
//   }
//  });

// // TC78: Other tools hyperlink

// test('TC78-1', async({page}) =>{
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await page.getByRole('link', {name: 'TDEE Calculator'}).click();
//   await expect(page).toHaveURL('./calculators/total-daily-energy-expenditure')
// });

// test('TC78-2', async({page}) =>{
//   await page.goto('./calculators/basal-metabolic-rate');
//   await page.waitForLoadState('domcontentloaded');
//   await page.getByRole('link', {name: 'KETO Calculator'}).click();
//   await expect(page).toHaveURL('./calculators/keto')
// });
