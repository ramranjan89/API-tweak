import {test, expect} from '@playwright/test';

test('Visual Testing Practice @non-image', async ({ page }) => {
      await page.goto('https://demowebshop.tricentis.com/login');

      expect(await page.getByRole('heading', { name: 'Welcome, Please Sign In!' }).textContent()).toMatchSnapshot("non-image.txt"); //!capture the non-image screenshot
})
