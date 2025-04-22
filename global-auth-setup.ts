// import { chromium, expect } from "@playwright/test";

// async function globalSetup() {
//   const browser = await chromium.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   // Navigate to login page
//   await page.goto('https://conduit.bondaracademy.com/login');

//   // Fill login form
//   await page.getByRole('textbox', { name: 'Email' }).fill('ramranjanjha89.rr@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('8271554461@r');
//   await page.getByRole('button', { name: 'Sign in' }).click();

//   // Validate login
//   await expect(page.locator('app-layout-header')).toContainText('conduit');
//   await expect(page.locator('app-layout-header')).toContainText('ramranjan');

//   // Save authenticated state
//   await context.storageState({ path: './globalauth/setup1.json' }); // make sure this path exists

//   await browser.close();
// }

// export default globalSetup;