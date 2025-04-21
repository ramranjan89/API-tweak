import {test , expect} from "@playwright/test";

test('post call api validate with UI', async ({request, page})=>
{
   //sign in to the application:
   await page.goto('https://conduit.bondaracademy.com/login');
   await page.getByPlaceholder('Email').fill('ramranjanjha89.rr@gmail.com');
   await page.getByPlaceholder('Password').fill('8271554461@r');
   await page.getByRole('button', { name: 'Sign in' }).click();
   const createTitleResponse = await request.post('https://conduit-api.bondaracademy.com/api/articles/',
        {
            data:
            {
                "article": {
                    "title": "test articlee via automation",
                    "description": "demo automation",
                    "body": "demo article",
                    "tagList": [
                        "demo, automation",
                    ]
                }
            }
        })

        const articleResponse = await createTitleResponse.json();
        console.log(articleResponse);
})

