import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page })=>

{
 await page.goto('https://conduit.bondaracademy.com/');

})

test('1st test', async ({ page})=>

{
    await page.reload();
    await page.locator('app-article-list').getByRole('link', { name: 'ramranjan' }).click();
    await page.getByRole('link', { name: ' Edit Profile Settings' }).click();
    await page.getByRole('button', { name: 'Update Settings' }).click();

})

