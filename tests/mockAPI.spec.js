import {test, expect} from '@playwright/test';
import tag  from '../test-data/tag.json' 

test('mocking an API request', async ({ page, request }) => {
       await page.route('https://conduit-api.bondaracademy.com/api/tags', async route => 
       {
            await route.fulfill({
            contentType: 'application/json',
            body: JSON.stringify(tag),
       
       });
    });

     

       //await page.goto('https://conduit.bondaracademy.com/');

       await page.waitForTimeout(4000);
});

test.only('mocking and editing a article', async ({ page, request }) => 
{
    page.route('https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0', async route =>
    {
         const fetchResponse= await route.fetch();
         const JsonResponse = await fetchResponse.json();
         JsonResponse.articles[0].title = "mocked the title";
         JsonResponse.articles[0].description = "mocked the description";

         await route.fulfill(
            {
                contentType: 'application/json',
                body: JSON.stringify(JsonResponse),
            });
    })
    await page.goto('https://conduit.bondaracademy.com/');

    await expect(page.locator('.col-md-9 app-article-list h1').first()).toContainText('mocked the title');
    await expect(page.locator('.col-md-9 app-article-list p').first()).toContainText('mocked the description');
    await page.waitForTimeout(4000);
})