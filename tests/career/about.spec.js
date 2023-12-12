import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/about');
    await page.waitForLoadState('domcontentloaded');
});

test('a03-04', async ({ page }) => {
    await expect.soft(page.locator('.__wedo__content__header')).toHaveText('What we do');
    await expect.soft(page.locator('.__wedo__content__container .__content__title').first()).toHaveText('Technology'); 
    await expect.soft(page.locator('.__wedo__content__container .__content__description').first()).toHaveText('We build tools and apps that make it simpler for people to start and sustain a healthy low-carb lifestyle. Our engineering team has massive challenges ahead, and it’s growing rapidly.'); 
    await expect.soft(page.locator('.__wedo__content__container .__content__title').nth(1)).toHaveText('Courses');
    await expect.soft(page.locator('.__wedo__content__container .__content__description').nth(1)).toHaveText('We create in-depth courses on health and wellness topics to empower users with knowledge. Our goal is to explain complex health topics in simple terms so they can become an expert in a field where there are so many conflicting opinions.'); 
    await expect.soft(page.locator('.__wedo__content__container .__content__title').nth(2)).toHaveText('Books and recipes');
    await expect.soft(page.locator('.__wedo__content__container .__content__description').nth(2)).toHaveText('We use books and ebooks to break down complex health topics into digestible information. We also provide cookbooks and recipes to help people stay on a healthy eating plan and improve their skills in the kitchen.'); 
    await expect.soft(page.locator('.__wedo__content__container .__content__title').nth(3)).toHaveText('Videos');
    await expect.soft(page.locator('.__wedo__content__container .__content__description').nth(3)).toHaveText('We have a growing YouTube channel of over 7 million subscribers and more than 1 billion views. Our channel provides free information to the world to educate and help people create a better lifestyle using the latest health and wellness strategies.'); 
    await expect.soft(page.locator('.__wedo__content__container .__content__title').nth(4)).toHaveText('Dietary supplements and beauty products');
    await expect.soft(page.locator('.__wedo__content__container .__content__description').nth(4)).toHaveText('We create natural dietary supplements and skin and hair care products using high-quality ingredients and a rigorous research and development process. It\'s our goal to supply our customers with premium products that really work.'); 
});

test('a05', async ({ page }) => {
    await expect.soft(page.locator('.__progress__container .__progress__title')).toHaveText('Our progress');
    await expect.soft(page.locator('.__progress__container .__progress__description')).toHaveText('Our passionate viewers and customers have submitted more than 5.5 thousand success stories and thousands of 5-star product reviews, with more stories and reviews submitted every day. It\'s clear that our company has made a substantial impact on the world with our quality health and wellness content and products, and we want to keep extending our reach. Contact us if you think you’d be a good fit for our team!');
    await expect.soft(page.locator('.__progress__banner .__banner__content').first()).toHaveText('3 Billion impressions');
    await expect.soft(page.locator('.__progress__banner .__banner__content').nth(1)).toHaveText('3 Billion impressions');
    await expect.soft(page.locator('.__progress__banner .__banner__content').nth(2)).toHaveText('3 Billion impressions');
});