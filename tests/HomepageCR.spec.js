import { test, expect } from '@playwright/test';

test('hp01-02', async ({ page }) => {
await page.goto('/');
await page.waitForLoadState('domcontentloaded');
await expect.soft(page.getByText('Join Our Team').first()).toBeVisible();
await expect.soft(page.getByText('Join us to transform the current approach to health and wellness from one that focuses on treating symptoms to one that addresses the root cause.').first()).toBeVisible();
});


test('hp03-04', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');
  await expect.soft(page.getByRole('button', { name: 'View open positions' })).toBeVisible();
  await page.getByRole('button', { name: 'View open positions' }).click();
  await expect(page).toHaveURL('./open-positions')
});

test('hp06', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByText('Open Positions').first()).toBeVisible();
});

test('hp07', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');
  await expect.soft(page.getByRole('link', { name: 'View all positions' })).toBeVisible();
  await page.getByRole('link', { name: 'View all positions' }).click();
  await expect(page).toHaveURL('./open-positions')
});

test('hp08-09', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');
  //await expect.soft(page.getByText('Our Perks and Benefits').first()).toBeVisible();
  await expect.soft(page.getByText('Here are a few ways we contribute back to our employees.').first()).toBeVisible();
});

await page.getByRole('heading', { name: 'Work & Life Balance' }).click();
await page.getByText('We work hard here- but we also work smart. We understand that personal or family').click();

test('hp12-13', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');
  await expect.soft(page.getByText('Join Our Team').first()).toBeVisible();
  await expect.soft(page.getByText('Join us to transform the current approach to health and wellness from one that focuses on treating symptoms to one that addresses the root cause.').first()).toBeVisible();});
// test('hp10a-11a', async ({ page }) => {
// const locator = page.locator('#benefits_perk');
// await expect(locator).toHaveText('Work & Life Balance ');
// await expect(locator).toHaveText('We work hard here- but we also work smart. We understand that personal or family challenges arise and life happens, so we do our best to accommodate that. Our goal is to help employees create balance by offering paid vacation and holidays, as well as paid personal days so you can take the time you need when you need it. ');
// });

test('hp15-17', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await expect.soft(page.getByText('Work & Life Balance')).toBeVisible();
    await expect.soft(page.getByText('We work hard here- but we also work smart. We understand that personal or family challenges arise and life happens, so we do our best to accommodate that. Our goal is to help employees create balance by offering paid vacation and holidays, as well as paid personal days so you can take the time you need when you need it.')).toBeVisible();
    await expect.soft(page.getByText('A health-conscious team')).toBeVisible();
    await expect.soft(page.getByText('Our company lives and breathes health and wellness, and we want to make it easy for you to be your best self. We provide gym memberships to all employees so they can take full advantage of staying active, whether that\'s pumping iron at the weightlifting stations or taking a Zumba class! We also offer a 50% discount off all of Dr. Berg’s products.')).toBeVisible();
    await expect.soft(page.getByText('Professional development and training')).toBeVisible();
    await expect.soft(page.getByText('We offer paid on-the-job training and encourage professional advancements and continued education. Joining our team is an excellent opportunity to learn more about e-commerce and working with a health influencer!')).toBeVisible();
    });

test('hp18-20', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await expect.soft(page.getByText('Equal Opportunity Employer').first()).toBeVisible();
    await expect.soft(page.getByText('Dr. Berg Nutritionals is proud to be an equal opportunity employer that values equality and diversity. We do not discriminate based on gender, race, ethnicity, national origin, age, disability, religion, sexual orientation, gender identity or expression, veteran status, or any other applicable characteristics protected by law.')).toBeVisible();
    await expect.soft(page.getByAltText('puzzle pieces of employee avatars')).toBeVisible()
    });

test('hp21-23', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await expect.soft(page.getByText('Remotely powered global team').first()).toBeVisible();
    await expect.soft(page.getByText('Allowing people to work from home or from anywhere is something we believe strongly in. You will have the freedom to work from wherever you are and spend time where you feel comfortable.')).toBeVisible();
    await expect.soft(page.getByAltText('the boy and the woman with a laptop')).toBeVisible()
});

test('hp24-25', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await expect.soft(page.getByText('Our mission is to transform the current approach to health and wellness from one that focuses on treating symptoms to one that addresses the root cause. We believe that the only way to achieve full health potential is to support the body’s natural health pathways. Many people don’t know about the holistic approach to health and wellness—we want to spread the word with the world.')).toBeVisible();
    await expect.soft(page.getByAltText('Green background')).toBeVisible()
});

test('hp26', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await expect.soft(page.getByText('What we do')).toBeVisible();
});

test('hp35-40', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await expect.soft(page.getByText('Always on the look for new talents').first()).toBeVisible();
    await expect.soft(page.getByText('You can also connect with us, even in case there is no job opening listed at the moment for your skills. Simply connect with us and tell us what department is of any interest for you.')).toBeVisible();
    await expect.soft(page.getByRole('button', { name: 'Open positions', exact: true })).toBeVisible();
    await page.getByRole('button', { name: 'Open positions', exact: true }).click();
    await expect(page).toHaveURL('./open-positions')
});
