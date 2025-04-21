import {expect, test} from '@playwright/test';

test('global setup base url testing @API @Get', async ({ request })=> {
    
    const gobalJsonRespone =  await request.get('/booking');
    //console.log(await gobalJsonRespone.json()); // 200
    const bookingDetails = await request.get('/booking/1016');
         console.log(await bookingDetails.json()); // 200
})

test('global setup base url testing- 2 @API @Get', async ({ request })=> {
    
    const gobalJsonRespone1 =  await request.get('/booking',
        {
        params:
        {
            firstname: 'Josh',
            lastname: 'Allen',

        }
    });
         console.log(await gobalJsonRespone1.json()); 
})

test.only('validate json respone @API',  async ({ request })=> {
        const bookingDetails = await request.get('/booking/45');
        const bookingDetailsJson = await bookingDetails.json();
        console.log(bookingDetailsJson); // 200
        expect(bookingDetailsJson.firstname).toBe('Josh');
})