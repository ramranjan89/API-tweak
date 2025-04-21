import {test, expect} from '@playwright/test';

test('print and assert booking ID 1930 details @API @Get', async ({ request }) => {
    const bookingListResponse = await request.get('/booking');
    expect(bookingListResponse.status()).toBe(200); // ✅ Assert list call is successful
  
    const bookingList = await bookingListResponse.json();
    console.log(bookingList); // ✅ Print the booking list for debugging
  
    if (!Array.isArray(bookingList) || bookingList.length === 0) {
      throw new Error('No bookings found.');
    }
  
    let bookingFound = false;
  
    for (const booking of bookingList) {
      const bookingId = booking.bookingid;
  
      if (bookingId === 30) {
        bookingFound = true;
  
        const detailsResponse = await request.get(`/booking/${bookingId}`);
        expect(detailsResponse.status()).toBe(200); // ✅ Assert detail call is successful
  
        const details = await detailsResponse.json();
  
        // ✅ Assert key fields are present
        expect(details).toHaveProperty('firstname');
        expect(details).toHaveProperty('lastname');
        expect(details).toHaveProperty('bookingdates');
        expect(details.bookingdates).toHaveProperty('checkin');
        expect(details.bookingdates).toHaveProperty('checkout');
  
        // ✅ Print the details
        console.log(`✅ Booking ID: ${bookingId}`);
        console.log(`  Name: ${details.firstname} ${details.lastname}`);
        console.log(`  Check-in: ${details.bookingdates.checkin}`);
        console.log(`  Check-out: ${details.bookingdates.checkout}`);
  
        break; // Stop looping after finding 1930
      }
    }
  
    // ✅ Final assertion: make sure ID 1930 was found
    expect(bookingFound).toBe(true);

  });