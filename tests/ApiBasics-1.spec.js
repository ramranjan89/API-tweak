import {test, request} from '@playwright/test';

let forAllTestContext; 

test.beforeAll('before all api calls', async () => 

    {
         forAllTestContext = await request.newContext({
            baseURL: 'https://restful-booker.herokuapp.com',
            extraHTTPHeaders:
            {
                Accept:'application/json',
                'Content-Type': 'application/json'
            
            }
          })

    })

test('api testing get call @API @Get', async ({ request }) => {
 const response1= await request.get('https://restful-booker.herokuapp.com/booking',
    
    {
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
    });

 console.log(await response1.status()); // 200
 console.log(await response1.statusText()); // OK
 console.log(await response1.json());
})

test('api get call using context @context @API', async () => {
       const newApicontext =  await request.newContext({
        baseURL: 'https://restful-booker.herokuapp.com',
            extraHttpHeaders: 
            {
                Accept: 'application/json'
            }
        });
        const response2 = await newApicontext.get('/booking/357');
        console.log(await response2.json()); 
        console.log(await response2.status()); // 200
        const response3 = await newApicontext.get('/booking?firstname=John&lastname=Smith');
        console.log(await response3.json());
        console.log(await response3.status()); // 200

        const respons4 = await newApicontext.get('/booking?checkin=2018-01-01&checkout=2019-01-01');
        console.log(await respons4.json());
        console.log(await respons4.status()); // 200
        console.log(await respons4.statusText()); // OK

})

test.only('test levle setup api get call', async () => {

         const respon5 = await forAllTestContext.get('/booking?checkin=2018-01-01&checkout=2019-01-01');
         //console.log(await respon5.json());
         //console.log(await respon5.status()); // 200
    


});
