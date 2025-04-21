import {test , expect} from '@playwright/test';

test('end toend visual test', async ({ page })=>
{
  await page.goto('https://demowebshop.tricentis.com/login');
  await expect(page).toHaveScreenshot("login-page.png"); //!capture the screenshot of the login page
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('ramranjanjha1994@gmail.com');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('8271554461@rR');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page).toHaveScreenshot("home-page.png"); //!capture the screenshot of the home page after login
  await expect(await page.getByRole('link', { name: 'Tricentis Demo Web Shop' }).textContent()).toMatchSnapshot('home-page-heading.txt');
 

})