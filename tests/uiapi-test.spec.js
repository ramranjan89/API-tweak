import {test, expect, request} from '@playwright/test';


test('UI validateion using api @UI @API', async ({ request, page})=>
{

    const response = await request.post('https://www.meesho.com/api/v1/feed', {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', // mimic browser
          'Accept': 'application/json',
        },
        data: {
          filter: {
            type: "for_you",
            sort_option: null,
            selected_filters: [],
            session_state: "",
            selectedFilterIds: [],
            isClearFilterClicked: false
          },
          cursor: null,
          offset: 0,
          limit: 20
        }
      });
    

  //const feedResponse= await feedJson.json();
  console.log(await response.status()); // 200
  const feedResponse= await response.json();
  console.log(await feedResponse.catalogs.length);
  console.log(await feedResponse.catalogs[0].id);
  const productDescription =  await feedResponse.catalogs[0].description;
  console.log(productDescription);
  // launching web browser

  const titleText = "Latest Trendy Men Casual Shoes";
   expect(productDescription).toContain(titleText); // Assert that the product description contains "Mobile Holder"
   
});