import { test, expect } from '@playwright/test';

test('API testing post call @API @Post', async ({ request }) => {
  const postRequestCall = await request.post('/booking', {
    data:
    

        {
            "firstname" : "raja",
            "lastname" : "ram",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }
})
 const postJsonResponse = await postRequestCall.json();
 expect(await postRequestCall.ok).toBeTruthy(); // 200
 expect(await postRequestCall.status()).toBe(200); // 200
 console.log((postJsonResponse)); 
 ///geting that booking id from the post call
  const bookingIDResponse = await request.get(`/booking/${postJsonResponse.bookingid}`)
  console.log(await bookingIDResponse.json()); // 200
})