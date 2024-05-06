import { test, expect } from '@playwright/test';

test.beforeEach(async({page}) => {
    await page.goto('https://github.com/');
})

test('test1', async ({ page }) => {
    await page.getByLabel('Open user account menu').click();
    await page.getByRole('link', { name: 'Your profile' }).click();
    await page.getByRole('button', { name: 'Edit profile' }).click();
    await page.getByPlaceholder('Name').click();
    await page.getByPlaceholder('Name').fill('Linh Huynh');
    await page.getByRole('button', { name: 'Save' }).click({ timeout: 30000 });
    await expect(page.locator('.p-name').getByText('Linh Huynh')).toBeVisible();
});


test('test2', async ({ page }) => {
    await page.getByLabel('Open user account menu').click();
    await page.getByRole('link', { name: 'Your profile' }).click();
    await page.getByRole('button', { name: 'Edit profile' }).click();
    await page.getByPlaceholder('Company').click();
    await page.getByPlaceholder('Company').fill('MGI');
    await page.getByRole('button', { name: 'Save' }).click({ timeout: 300000 });
    await expect(page.getByText('MGI')).toBeVisible();
});


test('test3', async ({ page }) => {
    await page.getByLabel('Open user account menu').click();
    await page.getByRole('link', { name: 'Your profile' }).click();
    await page.getByRole('button', { name: 'Edit profile' }).click();
    await page.getByPlaceholder('Add a bio').click();
    await page.getByPlaceholder('Add a bio').fill('Thuy Linh Huynh');
    await page.getByRole('button', { name: 'Save' }).click({ timeout: 300000 });
    await expect(page.getByText('Thuy Linh Huynh').nth(1)).toBeVisible();
});

test('test4', async ({ page }) => {
    await page.getByLabel('Open user account menu').click();
    await page.getByRole('link', { name: 'Your profile' }).click();
    await page.getByRole('button', { name: 'Edit profile' }).click();
    await page.getByPlaceholder('Location').click();
    await page.getByPlaceholder('Location').fill('Vietnam');
    await page.getByRole('button', { name: 'Save' }).click({ timeout: 300000 });
    await expect(page.locator('.vcard-details').getByText('Vietnam')).toBeVisible();
});

test('test5', async ({ page }) => {
    await page.getByLabel('Open user account menu').click();
    await page.getByRole('link', { name: 'Your profile' }).click();
    await page.getByRole('button', { name: 'Edit profile' }).click();
    await page.getByPlaceholder('Website').click();
    await page.getByPlaceholder('Website').fill('test123');
    await page.getByRole('button', { name: 'Save' }).click({ timeout: 300000 });
    await expect(page.locator('.vcard-details').getByText('test123')).toBeVisible();
});

test('test6', async ({ page }) => {
    await page.getByLabel('Open user account menu').click();
    await page.waitForTimeout(5000)
    await page.getByLabel('User navigation').getByRole('button', { name: 'Set status' }).click();
    await page.getByRole('checkbox', { name: 'Busy' }).check();
    await page.waitForTimeout(5000)
    await page.getByRole('button', { name: 'Clear status' }).click();
    await expect(page.getByRole('button', { name: 'Set status' })).toBeVisible()
  });