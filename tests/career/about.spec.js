import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/about');
    await page.waitForLoadState('domcontentloaded');
});

test('a01', async ({ page }) => {
    await expect.soft(page.locator('.__wedo__content__header')).toHaveText('What we do');
    await expect.soft(page.locator('.__content__title').first()).toHaveText('Technology'); 
    await expect.soft(page.locator('.__content__description').first()).toHaveText('We build tools and apps that make it simpler for people to start and sustain a healthy low-carb lifestyle. Our engineering team has massive challenges ahead, and it’s growing rapidly.'); 
    await expect.soft(page.locator('.__content__title').nth(1)).toHaveText('Courses');
    await expect.soft(page.locator('.__content__description').nth(1)).toHaveText('We create in-depth courses on health and wellness topics to empower users with knowledge. Our goal is to explain complex health topics in simple terms so they can become an expert in a field where there are so many conflicting opinions.'); 
});

