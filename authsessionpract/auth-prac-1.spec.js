import { test, expect } from '@playwright/test';

test('Validate OrangeHRM Dashboard', async ({ page }) => {
    // Navigate to the URL
    //test.use({storageState: {cookies:[], origins:[]}}) we can use to kip this test.
    await page.waitForTimeout(15000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    // Validate the URL
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    // Validate the title
    const title = await page.title();
    expect(title).toBe('OrangeHRM');

    // Take a full-page screenshot
    await page.screenshot({ path: 'dashboard-screenshot.png', fullPage: true });
});