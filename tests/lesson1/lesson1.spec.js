import { test, expect } from '@playwright/test';

test('id', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(5000);
  await page.getByLabel('E-mail address(Required)').click();
  await page.getByLabel('E-mail address(Required)').fill('meo');
  await expect(page.getByText('Please enter a valid email address.').first()).toBeVisible();
});