//write a post and put api code
import {test, expect} from '@playwright/test';
import jsondata from '../test-data/multidata.json'



test('post & put call with one single data', async ({ request})=>
{
  const postrequest = await request.post('/booking', 
    {
        data: jsondata.postcallAPI,
    })
 const postJson= await postrequest.json();
 console.log(postJson);
 expect(postJson.booking.firstname).toEqual(jsondata.postcallAPI.firstname);
    
 const putrequest = await request.put(`/booking/${postJson.bookingid}`,
        {
            data: jsondata.putcallAPI,
        })

const putJson = await putrequest.json();
console.log(putJson);
expect(putJson.firstname).toEqual(jsondata.putcallAPI.firstname);

})