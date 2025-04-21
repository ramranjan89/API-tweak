import {test , expect} from '@playwright/test';
import apidata from '../test-data/json-APIresponse.json'
import putapidata from '../test-data/put-json-file.json'

test('passing data through json file @post @API', async ({request})=>

    {
       const postcallrequest = await request.post('/booking', {
        data: apidata,
       })
    
       const postcallJsonResponse = await postcallrequest.json();
        console.log(postcallJsonResponse); // 200
        console.log(postcallJsonResponse.bookingid); // 200
       expect(postcallJsonResponse.bookingid).toBeDefined(); // 200
      expect(postcallJsonResponse.booking).toMatchObject(apidata); // 200
      expect(postcallJsonResponse.booking.firstname).toEqual(apidata.firstname); // 200


    })

    test.only('passing data through json file @put @API', async ({request})=>

    {
           const putCallRequest = await request.put('/booking/3' , {
            data: putapidata,
           })
              console.log(await putCallRequest.text());
              const putCallJsonResponse = await putCallRequest.json();
              expect(await putCallRequest.status()).toBe(200); // 200
              expect(await putCallRequest.statusText()).toBe('OK'); // 200
              expect(await putCallRequest.body()).toBeDefined(); // 200
              expect(putCallJsonResponse.firstname).toEqual(putapidata.firstname); 
              const getcallresponse2065 =  await request.get('/booking/3');
              expect(getcallresponse2065.status()).toBe(200); // 200
              expect(putCallJsonResponse).toMatchObject(await getcallresponse2065.json()); // 
           

})