import { test } from '@playwright/test';

test('Login and save auth state', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name: 'Login'}).click();
    // Wait for navigation to the dashboard

    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    // Save the authentication state to a file
    await page.context().storageState({ path: 'authState.json' });

});

