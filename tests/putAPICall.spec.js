import {test , expect} from '@playwright/test';

test("put request api call @put @API", async ({request})=>

    {
 const putResquest = await request.put('/booking/1', {
    // headers: {
    //     Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=",
    //        },
    data: {
        "firstname" : "murari",
        "lastname" : "lal",
        "totalprice" : 399,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2025-02-20",
            "checkout" : "2025-03-12"
        },
        "additionalneeds" : "Breakfast"
    }
    })  

    console.log(await putResquest.status()); // 200
    console.log(await putResquest.statusText()); // OK
    const editedResponsejson = await putResquest.json(); // 200
    const fetchresponse = await request.get('/booking/1');
    const getbookingIDjson= await fetchresponse.json(); // 200
    expect(getbookingIDjson).toEqual(editedResponsejson); // 200
    expect(getbookingIDjson.firstname).toEqual(editedResponsejson.firstname); // 200
    
    
})