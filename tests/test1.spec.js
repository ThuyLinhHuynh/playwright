import { test, expect } from '@playwright/test';
import exp from 'constants';
let lhcm = 'Your height in cm';
let lhfeet = 'Your height in feet';
let lwkg = 'Your weight in kg';
let lwlbs = 'Your weight in lbs';
let heightCm = 180;
let heightFeet = 8;
let weightKg = 45;
let weightLbs = 200;

test('ui1-2', async({page}) => {
  await page.goto('/calculators/basal-metabolic-rate');
  // await page.waitForTimeout(5000);
  await expect.soft(page.locator('div > a > span').getByText('Back to').first()).toBeVisible();
  await expect.soft(page.locator('div > a > span').getByText('Back to').first()).toHaveCSS('font-size','16px');
  await expect(page.locator('div > a > span').getByText('Back to').first()).toHaveCSS('color','rgb(42, 54, 62)');
});

test('ui3-4', async({page}) => {
  await page.goto('/calculators/basal-metabolic-rate');
  // await page.waitForTimeout(5000);
  await expect.soft(page.getByText('GENERAL SETTINGS').first()).toBeVisible();
  await expect.soft(page.getByText('GENERAL SETTINGS').first()).toHaveCSS('font-weight','700');
  await expect.soft(page.getByText('GENERAL SETTINGS').first()).toHaveCSS('font-size','16px');
  await expect(page.getByText('GENERAL SETTINGS').first()).toHaveCSS('color','rgb(42, 54, 62)');
}
);

test('ui5-6', async({page}) =>{
  await page.goto('/calculators/basal-metabolic-rate');
  // await page.waitForTimeout(5000);
  await expect.soft(page.locator('label').filter({ hasText: 'Imperial units' }).locator('span')).toHaveCSS('background-color','rgb(204, 233, 238)');
  await page.locator('label').filter({ hasText: 'Imperial units' }).locator('span').click();
  await expect(page.locator('label').filter({ hasText: 'Imperial units' }).locator('span')).toHaveCSS('background-color','rgb(211, 214, 215)');
});

test('ui7-8', async({page}) => {
  await page.goto('/calculators/basal-metabolic-rate');
  // await page.waitForTimeout(5000);
  await expect(page.locator('span').filter({ hasText: 'Imperial units' })).toBeVisible();
  await expect(page.locator('span').filter({ hasText: 'Imperial units' })).toHaveCSS('font-family','Roboto, sans-serif')
  await expect(page.locator('span').filter({ hasText: 'Imperial units' })).toHaveCSS('font-size','16px');
  await expect(page.locator('span').filter({ hasText: 'Imperial units' })).toHaveCSS('color','rgb(42, 54, 62)');
}
);

test('ui9-10',async({page}) => {
  await page.goto('calculators/basal-metabolic-rate');
  await expect.soft(page.getByText('Gender',{exact:true})).toHaveCSS('font-family','Roboto, sans-serif');
  await expect.soft(page.getByText('Gender',{exact:true})).toHaveCSS('font-size','12px');
  await expect.soft(page.getByText('Gender',{exact:true})).toHaveCSS('font-weight','700');
  await expect.soft(page.getByText('Gender',{exact:true})).toHaveCSS('color','rgb(42, 54, 62)');
});

test('ui11-12-13',async({page}) => {
  await page.goto('calculators/basal-metabolic-rate');
  await expect.soft(page.getByRole('button', { name: 'Man', exact: true })).toHaveCSS('border-bottom-color','rgb(38, 72, 212)');
  await expect.soft(page.getByRole('button', { name: 'Man', exact: true })).toHaveCSS('color','rgb(38, 72, 212)');
  await expect.soft(page.getByRole('button', { name: 'Man', exact: true })).toHaveCSS('font-family','Roboto, sans-serif');
  await expect.soft(page.getByRole('button', { name: 'Man', exact: true })).toHaveCSS('font-size','16px');
  await expect.soft(page.getByRole('button', { name: 'Man', exact: true })).toHaveCSS('font-weight','700');
  await expect.soft(page.getByRole('button', { name: 'Woman', exact: true })).toHaveCSS('border-bottom-color','rgb(211, 214, 215)');
  await expect.soft(page.getByRole('button', { name: 'Woman', exact: true })).toHaveCSS('color','rgb(93, 95, 101)');
  await expect.soft(page.getByRole('button', { name: 'Woman', exact: true })).toHaveCSS('font-family','Roboto, sans-serif');
  await expect.soft(page.getByRole('button', { name: 'Woman', exact: true })).toHaveCSS('font-size','16px');
  await expect.soft(page.getByRole('button', { name: 'Woman', exact: true })).toHaveCSS('font-weight','700');
  await page.getByRole('button', { name: 'Woman' }).click();
  await expect.soft(page.getByRole('button', { name: 'Man', exact: true })).toHaveCSS('border-bottom-color','rgb(211, 214, 215)');
  await expect.soft(page.getByRole('button', { name: 'Man', exact: true })).toHaveCSS('color','rgb(93, 95, 101)');
  await expect.soft(page.getByRole('button', { name: 'Woman', exact: true })).toHaveCSS('border-bottom-color','rgb(38, 72, 212)');
  await expect.soft(page.getByRole('button', { name: 'Woman', exact: true })).toHaveCSS('color','rgb(38, 72, 212)');
});

test('ui14-17', async ({ page }) => {
  let yourAge = '19 year olds';
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(3000);
  await expect(page.getByLabel('Your Age')).toBeVisible();
  await expect.soft(page.getByLabel('Your Age')).toHaveCSS('font-size','16px');
  await expect.soft(page.getByLabel('Your Age')).toHaveCSS('font-weight','400');
  await expect.soft(page.getByLabel('Your Age')).toHaveCSS('color','rgb(42, 54, 62)');
  await expect.soft(page.getByLabel('Your Age')).toHaveCSS('border-bottom-color','rgb(211, 214, 215)');
  await page.getByLabel('Your Age').click();
  await expect.soft(page.getByLabel('Your Age')).toHaveCSS('border-bottom-color','rgb(38, 72, 212)');
  await page.getByLabel('Your Age').fill(String(yourAge));
  await expect(await page.getByLabel('Your Age').inputValue()).not.toBe(String(yourAge));
});

test('ui18-21', async({page}) =>{
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(3000);
  await expect(page.getByLabel(lhfeet)).toBeVisible();
  await page.locator('label').filter({hasText:"Imperial units"}).click();
  await expect(await page.getByLabel(lhcm)).toBeVisible();
  await expect(page.getByLabel(lhcm)).toHaveCSS('font-size','16px');
  await expect(page.getByLabel(lhcm)).toHaveCSS('font-weight','400');
  await expect(page.getByLabel(lhcm)).toHaveCSS('color','rgb(42, 54, 62)');
  await page.getByLabel(lhcm).click();
  await expect(page.getByLabel(lhcm)).toHaveCSS('border-bottom-color','rgb(38, 72, 212)');
  await page.getByLabel(lhcm).fill('180 cm');
  await expect.soft(page.getByLabel(lhcm).inputValue()).not.toBe('180 cm');
});

test('ui22-23', async({page}) =>{
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(3000);
  await expect.soft(page.getByText('Example: 5.7')).toBeVisible();
  await page.locator('label').filter({hasText:"Imperial units"}).click();
  await expect.soft(page.getByText('Example: 180')).toBeVisible();
  await expect.soft(page.getByText('Example: 180')).toHaveCSS('font-size','14px');
  await expect.soft(page.getByText('Example: 180')).toHaveCSS('font-weight','400');
  await expect.soft(page.getByText('Example: 180')).toHaveCSS('color','rgb(93, 95, 101)');
});

test('ui24-27', async({page}) => {
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(3000);
  await expect(page.getByLabel(lwlbs)).toBeVisible();
  await page.locator('label').filter({hasText:"Imperial units"}).click();
  await expect(await page.getByLabel(lwkg)).toBeVisible();
  await expect(page.getByLabel(lwkg)).toHaveCSS('font-size','16px');
  await expect(page.getByLabel(lwkg)).toHaveCSS('font-weight','400');
  await expect(page.getByLabel(lwkg)).toHaveCSS('color','rgb(42, 54, 62)');
  await page.getByLabel(lwkg).click();
  await expect(page.getByLabel(lwkg)).toHaveCSS('border-bottom-color','rgb(38, 72, 212)');
  await page.getByLabel(lwkg).fill('45 kg');
  await expect.soft(page.getByLabel(lwkg).inputValue()).not.toBe('45 kg');
});

test('ui28-29', async({page}) =>{
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(3000);
  await expect.soft(page.getByText('Example: 110')).toBeVisible();
  await page.locator('label').filter({hasText:"Imperial units"}).click();
  await expect.soft(page.getByText('Example: 50')).toBeVisible();
  await expect.soft(page.getByText('Example: 50')).toHaveCSS('font-size','14px');
  await expect.soft(page.getByText('Example: 50')).toHaveCSS('font-weight','400');
  await expect.soft(page.getByText('Example: 50')).toHaveCSS('color','rgb(93, 95, 101)');
});

test('ui30-31', async({page}) =>{
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(3000);
  await expect(await page.getByText('Results BMR --- kcal /day')).toBeVisible();
  await expect.soft(await page.getByText('Results BMR --- kcal /day')).toHaveCSS('font-size','20px');
  await expect.soft(await page.getByText('Results BMR --- kcal /day')).toHaveCSS('color','rgb(42, 54, 62)');
});

test('ui32-34', async({page}) => {
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(3000);
  await expect.soft(await page.getByLabel('share button')).toHaveCSS('width','48px');
  await expect.soft(await page.getByLabel('share button')).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
  await page.getByLabel('share button').hover();
  await expect.soft(await page.getByLabel('share button')).toHaveCSS('background-color','rgb(244, 244, 244)');
  await expect.soft(await page.getByLabel('share button').evaluate(node => window.getComputedStyle(node, ':before').content)).toBe("\"Share\"");
  await page.getByLabel('share button').click();
  await expect(await page.getByText('Share this https://drberg.com/calculators/basal-metabolic-rate')).toBeVisible();
});

test('ui35-37', async({page}) =>{
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(3000);
  await expect.soft(await page.getByLabel('refresh button')).toHaveCSS('width','48px');
  await expect.soft(await page.getByLabel('refresh button')).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
  await page.getByLabel('refresh button').hover();
  await expect.soft(page.getByLabel('refresh button')).toHaveCSS('background-color','rgb(244, 244, 244)');
  await expect.soft(await page.getByLabel('refresh button').evaluate(node => window.getComputedStyle(node, ':before').content)).toBe("\"Restart - clear data\"");
});

test('ui38-39', async({page}) =>{
  await page.goto('/calculators/basal-metabolic-rate');
  await expect(page.getByText('View other tools')).toHaveCSS('font-size','12px');
  await expect(page.getByText('View other tools')).toHaveCSS('color','rgb(42, 54, 62)');
});

test('ui40-41', async({page}) =>{
  await page.goto('/calculators/basal-metabolic-rate');
  await expect.soft(page.getByRole('link').filter({hasText:'TDEE Calculator'})).toHaveCSS('font-size','16px');
  await expect.soft(page.getByRole('link').filter({hasText:'TDEE Calculator'})).toHaveCSS('color','rgb(38, 72, 212)');
  await expect.soft(page.getByRole('link').filter({hasText:'TDEE Calculator'})).toHaveCSS('font-weight','700');
  await expect.soft(page.getByRole('link').filter({hasText:'TDEE Calculator'})).toHaveCSS('text-decoration-line','none');
  await page.getByRole('link').filter({hasText:'TDEE Calculator'}).hover();
  await expect.soft(page.getByRole('link').filter({hasText:'TDEE Calculator'})).toHaveCSS('text-decoration-line','underline');
  await expect(page.getByRole('link').filter({hasText:'TDEE Calculator'})).toHaveCSS('color','rgb(56, 88, 219)');
});

test('ui42-43', async({page}) =>{
  await page.goto('/calculators/basal-metabolic-rate');
  await expect.soft(page.getByRole('link').filter({hasText:'KETO Calculator'})).toHaveCSS('font-size','16px');
  await expect.soft(page.getByRole('link').filter({hasText:'KETO Calculator'})).toHaveCSS('color','rgb(38, 72, 212)');
  await expect.soft(page.getByRole('link').filter({hasText:'KETO Calculator'})).toHaveCSS('font-weight','700');
  await expect.soft(page.getByRole('link').filter({hasText:'KETO Calculator'})).toHaveCSS('text-decoration-line','none');
  await page.getByRole('link').filter({hasText:'KETO Calculator'}).hover();
  await expect.soft(page.getByRole('link').filter({hasText:'KETO Calculator'})).toHaveCSS('text-decoration-line','underline');
  await expect(page.getByRole('link').filter({hasText:'KETO Calculator'})).toHaveCSS('color','rgb(56, 88, 219)');
});

test('ui44-45', async({page}) =>{
  await page.goto('/calculators/basal-metabolic-rate');
  await expect.soft(page.getByRole('heading').filter({name:'BMR Calculatorr'}).first()).toHaveCSS('font-size','40px');
  await expect.soft(page.getByRole('heading').filter({name:'BMR Calculatorr'}).first()).toHaveCSS('color','rgb(42, 54, 62)');
  await expect.soft(page.getByRole('heading').filter({name:'BMR Calculatorr'}).first()).toHaveCSS('font-weight','700');
});

test('ui46-47', async({page}) =>{
  await page.goto('/calculators/basal-metabolic-rate');
  await expect.soft(page.getByText('Basal Metabolic Rate').first()).toHaveCSS('font-size','20px');
  await expect.soft(page.getByText('Basal Metabolic Rate').first()).toHaveCSS('color','rgb(42, 54, 62)');
  await expect.soft(page.getByText('Basal Metabolic Rate').first()).toHaveCSS('font-weight','400');
});

test('ui48-49', async({page}) =>{
  await page.goto('/calculators/basal-metabolic-rate');
  await expect.soft(page.getByText('This BMR Calculator is a simple tool that helps you calculate how many calories your body needs if you were only to rest for the whole day.').first()).toHaveCSS('font-size','16px');
  await expect.soft(page.getByText('This BMR Calculator is a simple tool that helps you calculate how many calories your body needs if you were only to rest for the whole day.').first()).toHaveCSS('color','rgb(42, 54, 62)');
  await expect.soft(page.getByText('This BMR Calculator is a simple tool that helps you calculate how many calories your body needs if you were only to rest for the whole day.').first()).toHaveCSS('font-weight','400');
});

test('ui50-52', async({page}) =>{
  await page.goto('/calculators/basal-metabolic-rate');
  await expect.soft(page.getByText('Table of Contents')).toHaveCSS('font-size','16px');
  await expect.soft(page.getByText('Table of Contents')).toHaveCSS('color','rgb(42, 54, 62)');
  await expect.soft(page.getByText('Table of Contents')).toHaveCSS('font-weight','700');
  await expect.soft(page.locator('.leading-9').getByText('What does BMR mean?')).toBeVisible();
  await expect.soft(page.locator('.leading-9').getByText('What is a BMR calculator?')).toBeVisible();
  await expect.soft(page.locator('.leading-9').getByText('What is the purpose of a BMR calculator?')).toBeVisible();
  await expect.soft(page.locator('.leading-9').getByText('What is the Mifflin-St. Jeor equation?')).toBeVisible();
  await expect.soft(page.locator('.leading-9').getByText('How can this free BMR calculator help me with my Healthy Keto plan?')).toBeVisible();
});

test('ui53-55', async({page}) =>{
  await page.goto('/calculators/basal-metabolic-rate');
  await expect.soft(page.getByText('[ hide ]')).toHaveCSS('font-size','16px');
  await expect.soft(page.getByText('[ hide ]')).toHaveCSS('font-weight','700');
  await expect.soft(page.getByText('[ hide ]')).toHaveCSS('color','rgb(38, 72, 212)');
  await page.getByText('[ hide ]').click();
  await expect.soft(await page.getByText('[ hide ]')).not.toBeVisible();
  await expect.soft(await page.getByText('[ show ]')).toBeVisible();
  await expect.soft(page.locator('.leading-9').getByText('What does BMR mean?')).not.toBeVisible();
  await expect.soft(page.locator('.leading-9').getByText('What is a BMR calculator?')).not.toBeVisible();
  await expect.soft(page.locator('.leading-9').getByText('What is the purpose of a BMR calculator?')).not.toBeVisible();
  await expect.soft(page.locator('.leading-9').getByText('What is the Mifflin-St. Jeor equation?')).not.toBeVisible();
  await expect.soft(page.locator('.leading-9').getByText('How can this free BMR calculator help me with my Healthy Keto plan?')).not.toBeVisible();
});

test('ui56-58', async({page}) => {
  await page.goto('/calculators/basal-metabolic-rate');
  await expect(page.getByText('What is the purpose of a BMR calculator?').first()).toHaveCSS('font-size','16px');
  await expect(page.getByText('What is the purpose of a BMR calculator?').first()).toHaveCSS('font-weight','400');
  await expect(page.getByText('What is the purpose of a BMR calculator?').first()).toHaveCSS('color','rgb(56, 88, 219)');
  await page.getByText('What is the purpose of a BMR calculator?').first().hover();
  await expect(page.getByText('What is the purpose of a BMR calculator?').first()).toHaveCSS('color','rgb(56, 88, 219)');
  await expect(page.getByText('What is the purpose of a BMR calculator?').first()).toHaveCSS('text-decoration-line','underline');
});

test('ui59-62', async({page}) =>{
  await page.goto('/calculators/basal-metabolic-rate');
  await expect.soft(page.getByRole('heading', {level:'2'}).filter({hasText:'What does BMR mean?'})).toBeVisible();
  await expect.soft(await page.getByRole('heading', {level:'2'}).filter({hasText:'What does BMR mean?'})).toHaveCSS('font-size','20px');
  await expect.soft(await page.getByRole('heading', {level:'2'}).filter({hasText:'What does BMR mean?'})).toHaveCSS('font-weight','700');
  await expect.soft(await page.getByRole('heading', {level:'2'}).filter({hasText:'What does BMR mean?'})).toHaveCSS('color','rgb(42, 54, 62)');
  await expect.soft(page.getByText('BMR stands for basal metabolic rate. This is the number of calories your body uses without any physical activity (for example, spending an entire day resting in bed). To put it simply, BMR is the amount of fuel your engine (body) burns while idling (resting).')).toBeVisible();
  await expect.soft(page.getByText('In an idle state, your body still needs fuel to power your vital organs, like your brain, heart, lungs, liver, intestines, skin, and so on. The majority of people use about 70% of their total calorie expenditure for maintaining these vital organs. 10% of their calories are used to digest food, and 20% of calories are burned during physical activity. This means that most of your caloric intake is used to upkeep your organs at rest.')).toBeVisible();
  await expect.soft(page.getByRole('heading', {level:'2'}).filter({hasText:'What is a BMR calculator?'})).toBeVisible();
  await expect.soft(page.getByText('Our BMR calculator uses your gender, age, height, and weight to estimate your basal metabolic rate. This calculation is made with the Mifflin-St. Jeor equation, which is considered more accurate than other formulas, such as the Harris-Benedict equation.')).toBeVisible();
  await expect.soft(page.getByRole('heading', {level:'2'}).filter({hasText:'What is the purpose of a BMR calculator?'})).toBeVisible();
  await expect.soft(page.getByText('Our BMR calculator helps you understand how many calories you should consume daily to maintain your current body weight without physical activity. You can multiply your BMR by numbers ranging from 1.2 to 2.4, depending on your activity level, to get your TDEE (total daily energy expenditure). For example, multiplying by 1.2 would be ideal if you have a highly sedentary lifestyle–while multiplying by 2.4 would be ideal for pro athletes. Check out our TDEE calculator here to learn more.')).toBeVisible();
  await expect.soft(page.getByRole('heading', {level:'2'}).filter({hasText:'What is the Mifflin-St. Jeor equation?'})).toBeVisible();
  await expect.soft(page.getByText('The Mifflin-St Jeor equation uses four variables to calculate your BMR. These variables are gender, age, height, and weight.')).toBeVisible();
  await expect.soft(page.getByText('Here is what the Mifflin-St Jeor equation looks like:')).toBeVisible();
  await expect.soft(page.getByText('For women: 10W + 6.25H - 5A - 161 = BMR')).toBeVisible();
  await expect.soft(page.getByText('For men: 10W + 6.25H - 5A + 5 = BMR')).toBeVisible();
  await expect.soft(page.getByRole('heading', {level:'2'}).filter({hasText:'How can this free BMR calculator help me with my Healthy Keto plan?'})).toBeVisible();
  await expect.soft(page.getByText('While counting calories is not the primary goal of Healthy Keto, knowing how much energy you use each day can help you stay on track with your weight loss goals. If you struggle to lose weight after becoming keto-adapted, you may need to lower your calorie intake by reducing your fat, carb, and protein consumption. Dr. Berg’s free BMR calculator helps you understand how much energy your body needs while at rest. If you want a more detailed look at your keto plan, try our free keto macros calculator here.')).toBeVisible();
});

test('ui62link1', async({page}) =>{
  await page.goto('/calculators/basal-metabolic-rate');
  const page1Promise = page.waitForEvent('popup');
  await page.getByLabel('Open basal metabolic rate calculator here').click();
  const page1 = await page1Promise;
  await expect(page1).toHaveTitle('Total Daily Energy Expenditure (TDEE) Calculator | Dr. Berg');
}); 

test('ui62link2', async({page}) =>{
  await page.goto('/calculators/basal-metabolic-rate');
  const page2Promise = page.waitForEvent('popup');
  await page.getByLabel('Open total daily energy expenditure calculator here').click();
  const page2 = await page2Promise;
  await expect(page2).toHaveTitle('Free Keto Calculator - Check Your Keto Macros Fast | Dr. Berg');
}); 

test('fn63', async({page}) => {
  await page.goto('/calculators/basal-metabolic-rate');
  // await page.waitForTimeout(5000);
  await page.getByRole('link', { name: 'Back to drberg.com' }).click();
  await page.waitForTimeout(6000);
  await expect(await page).toHaveTitle('Lose weight fast with weight loss expert Dr. Berg');
});

test('fn64',async({page}) => {
  let height=4;
  let weight=800;
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(3000);
  await page.getByLabel('Your height in feet').fill(String(height));
  await page.getByLabel('Your weight in lbs').fill(String(weight));
  await page.locator('label').filter({ hasText: 'Imperial units' }).locator('span').click();
  await expect.soft(+(await page.getByLabel('Your weight in kg').inputValue())).toBeCloseTo(Math.round(weight /2.2));
  await expect(+(await page.getByLabel('Your height in cm').inputValue())).toBeCloseTo(Math.round(height * 30.48));
});

test('fn65', async({page}) => {
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(5000);
  await page.getByLabel('Your Age').fill('17');
  await expect(page.locator('div > div').getByText('This calculator will not be accurate for kids')).toBeVisible();
});

test('fn66', async({page}) => {
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(3000);
  await page.getByLabel('Your Age').fill('121');
  await expect(page.locator('div > div').getByText('Could you please double check your age?')).toBeVisible();
});

test('fn67', async({page}) => {
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(3000);
  await page.getByLabel('Height').fill('1.63');
  await expect(page.locator('div > div').getByText('This calculator will not be accurate for kids')).toBeVisible();
});

test('fn68', async({page}) => {
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(3000);
  await page.getByLabel('Height').fill('8.84');
  await expect(page.getByText('Could you please double check your height?')).toBeVisible();
});

test('fn69', async({page}) => {
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(3000); 
  await page.locator('label').filter({ hasText: 'Imperial units' }).locator('span').click();
  await page.getByLabel('Height').fill('49');
  await expect(page.getByText('This calculator will not be accurate for kids')).toBeVisible();
});

test('fn70', async({page}) => {
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(3000);
  await page.locator('label').filter({ hasText: 'Imperial units' }).locator('span').click();
  await page.getByLabel('Height').fill('270');
  await expect(page.locator('div > div').getByText('Could you please double check your height?')).toBeVisible();
});

test('fn71', async({page}) => {
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(3000);
  await page.getByLabel('Weight').fill('87');
  await expect(page.locator('div > div').getByText('This calculator will not be accurate for kids')).toBeVisible();
});

test('fn72', async({page}) => {
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(3000);
  await page.getByLabel('Weight').fill('1321');
  await expect(page.locator('div > div').getByText('Could you please double check your weight?')).toBeVisible();
});

test('fn73', async({page}) => {
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(3000);
  await page.locator('label').filter({ hasText: 'Imperial units' }).locator('span').click();
  await page.getByLabel('Weight').fill('39');
  await expect(page.locator('div > div').getByText('This calculator will not be accurate for kids')).toBeVisible();
});

test('fn74', async({page}) => {
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(3000);
  await page.locator('label').filter({ hasText: 'Imperial units' }).locator('span').click();
  await page.getByLabel('Weight').fill('601');
  await expect(page.locator('div > div').getByText('Could you please double check your weight?')).toBeVisible();
});

test('fn75-1',async ({page}) => {
  let age = 28;
  await page.goto('/calculators/basal-metabolic-rate');
  await page.getByLabel('Your weight in lbs').fill(String(weightLbs));
  await page.getByLabel('Your height in feet').fill(String(heightFeet));
  await expect(await page.getByText('Results BMR --- kcal /day')).toBeVisible();
});

test('fn75-2',async ({page}) => {
  let age = 28;
  await page.goto('/calculators/basal-metabolic-rate');
  await page.getByLabel('Your Age').fill(String(age));
  await page.getByLabel('Your height in feet').fill(String(heightFeet));
  await expect(await page.getByText('Results BMR --- kcal /day')).toBeVisible();
});

test('fn75-3',async ({page}) => {
  let age = 28;
  await page.goto('/calculators/basal-metabolic-rate');
  await page.getByLabel('Your Age').fill(String(age));
  await page.getByLabel('Your weight in lbs').fill(String(weightLbs));
  await expect(await page.getByText('Results BMR --- kcal /day')).toBeVisible();
});

test('fn75-4',async ({page}) => {
  let age = 28;
  await page.goto('/calculators/basal-metabolic-rate');
  await page.locator('label').filter({ hasText: 'Imperial units' }).locator('span').click();
  await page.getByLabel('Your weight in kg').fill(String(weightKg));
  await page.getByLabel('Your height in cm').fill(String(heightCm));
  await expect(await page.getByText('Results BMR --- kcal /day')).toBeVisible();
});

test('fn75-5',async ({page}) => {
  let age = 28;
  await page.goto('/calculators/basal-metabolic-rate');
  await page.locator('label').filter({ hasText: 'Imperial units' }).locator('span').click();
  await page.getByLabel('Your Age').fill(String(age));
  await page.getByLabel('Your height in cm').fill(String(heightCm));
  await expect(await page.getByText('Results BMR --- kcal /day')).toBeVisible();
});

test('fn75-6',async ({page}) => {
  let age = 28;
  await page.goto('/calculators/basal-metabolic-rate');
  await page.locator('label').filter({ hasText: 'Imperial units' }).locator('span').click();
  await page.getByLabel('Your Age').fill(String(age));
  await page.getByLabel('Your weight in kg').fill(String(weightKg));
  await expect(await page.getByText('Results BMR --- kcal /day')).toBeVisible();
});

test('fn76-m1',async ({page}) => {
  let age = 28;
  let result= Math.round((10*(Math.round(weightLbs/2.2))) + (6.25*Math.round((heightFeet*30.48)) - (5*age) + 5));
  await page.goto('/calculators/basal-metabolic-rate');
  await page.getByLabel('Your Age').fill(String(age));
  await page.getByLabel('Your weight in lbs').fill(String(weightLbs));
  await page.getByLabel('Your height in feet').fill(String(heightFeet));
  console.log(result)
  await expect(await page.getByText(String(result))).toBeVisible();
});

test('fn76-w1',async ({page}) => {
  let age = 28;
  let result= Math.round((10*(Math.round(weightLbs/2.2))) + (6.25*Math.round((heightFeet*30.48)) - (5*age) -161));
  await page.goto('/calculators/basal-metabolic-rate');
  await page.getByRole('button', { name: 'Woman' }).click();
  await page.getByLabel('Your Age').fill(String(age));
  await page.getByLabel('Your weight in lbs').fill(String(weightLbs));
  await page.getByLabel('Your height in feet').fill(String(heightFeet));
  console.log(result)
  await expect(await page.getByText(String(result))).toBeVisible();
});

test('fn76-m2',async ({page}) => {
  let age = 28;
  let result= Math.round((10*weightKg) + (6.25*heightCm) - (5*age) + 5);
  await page.goto('/calculators/basal-metabolic-rate');
  await page.locator('label').filter({ hasText: 'Imperial units' }).locator('span').click();
  await page.getByLabel('Your Age').fill(String(age));
  await page.getByLabel('Your weight in kg').fill(String(weightKg));
  await page.getByLabel('Your height in cm').fill(String(heightCm));
  console.log(result)
  await expect(await page.getByText(String(result))).toBeVisible();
});

test('fn76-w2',async ({page}) => {
  let age = 28;
  let result= Math.round((10*weightKg) + (6.25*heightCm) - (5*age) -161);
  await page.goto('/calculators/basal-metabolic-rate');
  await page.locator('label').filter({ hasText: 'Imperial units' }).locator('span').click();
  await page.getByRole('button', { name: 'Woman' }).click();
  await page.getByLabel('Your Age').fill(String(age));
  await page.getByLabel('Your weight in kg').fill(String(weightKg));
  await page.getByLabel('Your height in cm').fill(String(heightCm));
  console.log(result)
  await expect(await page.getByText(String(result))).toBeVisible();
});

test('fn77',async ({page}) => {
  await page.goto('/calculators/basal-metabolic-rate');
});

test('fn78a', async({page}) =>{
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(3000);
  await page.getByRole('link', {name: 'TDEE Calculator'}).click();
  await expect(page).toHaveTitle('Total Daily Energy Expenditure (TDEE) Calculator | Dr. Berg');
});

test('fn78b', async({page}) =>{
  await page.goto('/calculators/basal-metabolic-rate');
  await page.waitForTimeout(3000);
  await page.getByRole('link', {name: 'KETO Calculator'}).click();
  await expect(page).toHaveTitle('Free Keto Calculator - Check Your Keto Macros Fast | Dr. Berg');
});



