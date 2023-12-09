import { test, expect } from '@playwright/test';

test('01', async ({ page }) => {
await page.goto('/');
await page.waitForLoadState('domcontentloaded');
let src = await page.locator('.header-left').getByAltText('navigation', { exact: true }).getAttribute('src');
await expect.soft(src).toEqual('/images/navigation.svg')
});

test('02-04', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page.getByRole('button', { name: 'navigation' }).click();
    await expect.soft(await page.locator('.nav-bar.active').getByAltText('Close').getAttribute('src')).toEqual('/images/navigation-close.svg');
    await expect.soft(await page.locator('.nav-bar.active').getByAltText('Dr. Berg small logo').getAttribute('src')).toEqual('https://drberg-dam.imgix.net/dr-berg-images/logo-48-small.svg');
    await expect.soft(page.locator('.nav-bar.active ul > li > a')).toContainText(['Home', 'Open positions','About']);
    //console.log (await page.locator('ul > li > a[href="/"]').getAttribute('href'));
    await expect.soft(await page.locator('ul > li > a[href="/"]').getAttribute('href')).toEqual("/");
    await expect.soft(await page.locator('ul > li > a[href="/open-positions"]').getAttribute('href')).toEqual("/open-positions");
    await expect.soft(await page.locator('ul > li > a[href="/about"]').getAttribute('href')).toEqual("/about")
});

test('08-09', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page.getByRole('navigation').getByRole('button').nth(1).click();
    await expect.soft(page.locator('ul > li > a')).toContainText(['drberg.com', 'shop.drberg.com','courses.drberg.com']);
    await expect.soft(await page.locator('ul > li > a[href="https://drberg.com/?utm_source=careers.drberg.com&utm_medium=network-icon"]').getAttribute('href')).toEqual("https://drberg.com/?utm_source=careers.drberg.com&utm_medium=network-icon");
    await expect.soft(await page.locator('ul > li > a[href="https://shop.drberg.com/?utm_source=careers.drberg.com&utm_medium=network-icon"]').getAttribute('href')).toEqual("https://shop.drberg.com/?utm_source=careers.drberg.com&utm_medium=network-icon");
    await expect.soft(await page.locator('ul > li > a[href="https://courses.drberg.com/?utm_source=careers.drberg.com&utm_medium=network-icon"]').getAttribute('href')).toEqual("https://courses.drberg.com/?utm_source=careers.drberg.com&utm_medium=network-icon")
});


test.describe('Screen639', () => {
    test.use({ viewport: { width: 639, height: 1130} });
    test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
});
    test('08-09', async ({ page }) => {
        await expect.soft(await page.getByAltText('Dr. Berg Logo').first().getAttribute('src')).toEqual('https://drberg-dam.imgix.net/dr-berg-images/logo-48-full.svg')
    });
});

test.describe('Screen640', () => {
    test.use({ viewport: { width: 639, height: 1130} });
    test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
});
    test('08-09', async ({ page }) => {
        await expect.soft(await page.getByAltText('Dr. Berg Logo').first().getAttribute('src')).toEqual('https://drberg-dam.imgix.net/dr-berg-images/logo-48-full.svg')
    });
});

test




test('03', async ({ page,request }) => {
    let response = await request.get('https://drbergstorage.blob.core.windows.net/careersite/attributes.json');
    let data = await response.json()
    console.log(data)
});

// test('test', async ({ page }) => {
//   await page.goto('https://dev-careers-drberg.azurewebsites.net/');
//   await page.getByRole('button', { name: 'navigation' }).click();
//   await page.getByRole('button', { name: 'Close' }).click();
//   await page.getByRole('button', { name: 'navigation' }).click();
//   await page.getByRole('link', { name: 'Home' }).click();
//   await page.getByRole('button', { name: 'navigation' }).click();
//   await page.getByRole('link', { name: 'Open positions' }).click();
//   await page.getByRole('button', { name: 'navigation' }).click();
//   await page.getByRole('link', { name: 'About' }).click();

//   await page.getByRole('navigation').getByRole('button').nth(1).click();
//   await page.getByRole('navigation').getByRole('button').nth(1).click();
//   await page.getByRole('navigation').getByRole('button').nth(1).click();

// });