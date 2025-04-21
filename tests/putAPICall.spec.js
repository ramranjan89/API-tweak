import {test , expect} from '@playwright/test';

test("put request api call @put @API", async ({request})=>

    {
 const putResquest = await request.put('/booking/1', {
    headers: {
        Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=",
           },
    data: {
        "firstname" : "Rahul",
        "lastname" : "Ranjan",
        "totalprice" : 499,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2025-02-09",
            "checkout" : "2025-03-10"
        },
        "additionalneeds" : "Breakfast"
    }
    })  

    console.log(await putResquest.status()); // 200
    console.log(await putResquest.statusText()); // OK
    console.log(await putResquest.json()); // 200
    const fetchresponse = await request.get('/booking/1');
    console.log(await fetchresponse.json()); // 200
    
})