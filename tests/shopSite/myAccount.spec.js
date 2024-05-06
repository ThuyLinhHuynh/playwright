
import { test, expect } from '@playwright/test';

// test.beforeEach(async({page}) => {
//     let res = page.waitForResponse(`${process.env.DEV_SHOP_URL}/api/drberg/cart-wishlist-qty`);
//     await page.goto(`${process.env.DEV_SHOP_URL}`);
//     await expect((await res).status()).toEqual(200);
//     // await page.waitForTimeout(10000);
// })

test('01', async ({ page }) => {
    // let res = page.waitForResponse(`${process.env.DEV_SHOP_URL}/api/drberg/cart-wishlist-qty`);
    await page.goto(`${process.env.DEV_SHOP_URL}/sales/order/history`);
    // await expect((await res).status()).toEqual(200);
    await page.getByLabel('profile').click();
    await expect(page.getByText('Welcome linh huynh')).toBeVisible();
});