import {test, expect, request} from '@playwright/test';
import apidata from "../test-data/loginapi.json";
let token;
test.beforeAll( async()=>

{
    const requestContext = await request.newContext();
    const loginPostCall = await requestContext.post('/api/users/login',
        {
            data: apidata.loginAPIjson
        });

       const loginjson = await loginPostCall.json();
       console.log(loginjson);
       token= loginjson.user.token;
       expect(loginPostCall.ok()).toBeTruthy();
       expect(loginPostCall.status()).toBe(200);
       expect(loginjson.user.email).toBe('ramranjanjha89.rr@gmail.com');
       //expect(loginjson.user.password.toLowerCase()).toContain('undefined');
       console.log(token);

})

test('login test validation', async ({ page })=>

{
     await page.addInitScript(value =>
    {
        window.localStorage.setItem('jwtToken', value);
    }, token );
    await page.waitForTimeout(4000);
    await page.goto('https://conduit.bondaracademy.com/login');
    await page.waitForTimeout(4000);
    
})

test('mock api response of tags', async ({page})=>

{     
    await page.addInitScript(value =>
        {
            window.localStorage.setItem('jwtToken', value);
        }, token );

    page.route('/api/tags', async route=>
    {
      await route.fulfill({
        contentType: 'application/json',
        body: apidata.tagsjson,
      })   
    })
    await page.goto('https://conduit.bondaracademy.com/');
    await page.waitForTimeout(5000);

})
