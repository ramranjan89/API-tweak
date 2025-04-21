import { test, expect } from '@playwright/test';

test('Visual Testing Practice 1', async ({ page }) => {

      await page.goto('https://demowebshop.tricentis.com/login');
      //await page.screenshot({ path: 'screenshot1.png' });  //! just to capture the screenshot
      //await expect(page).toHaveScreenshot("screenshot1.png"); //!capture the screenshot but with name
      //await expect(page).toHaveScreenshot(["tab1", "tab1.png"]); //!capture the screenshot with folder sturcture
     // await expect(page).toHaveScreenshot("fullpage-scrrenshot.png", {fullPage: true}); //!capture the full page screenshot
      //await expect(page).toHaveScreenshot("maxdiv-scrrenshot.png", {maxDiffPixels: 200}); //!capture the max div screenshot
      await expect(page).toHaveScreenshot("maxdivpixels-scrrenshot.png", {maxDiffPixelRatio: 0.40}); //!capture the max div screenshot
      
});

test('Visual Testing Practice 2 @maked', async ({ page }) => {
   await page.goto('https://demowebshop.tricentis.com/login');
   await expect(page).toHaveScreenshot("mask-test1.png", {mask: [page.getByRole('link', { name: 'Tricentis Demo Web Shop' })]}); //!capture the max div screenshot

})

test.only('Visual Testing Practice 3 @update', async ({ page }) => {
      await page.goto('https://demowebshop.tricentis.com/login');
      await expect(page).toHaveScreenshot("landing-page.png"); 
   
   })