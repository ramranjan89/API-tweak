import {test, expect} from '@playwright/test';
import { request } from 'http';

test('delete api call @delete @api', async ({ request})=>

{
      const deleteRequestCall = await request.delete('/booking/9');
      //const deleteJson = await deleteRequestCall.json();
      const deleteText =  await deleteRequestCall.text();
      //console.log(deleteJson);
      console.log(deleteText);
      expect(deleteRequestCall.status()).toBe(201);
      expect(deleteRequestCall.ok()).toBeTruthy();
      expect(deleteText).toBe('Created');
      const getcallresponse =  await request.get('/booking/9');
      //const getcalljson = await getcallresponse.json();
      const getcalltext = await getcallresponse.text();
      const header= await getcallresponse.headers();
      console.log(header);
      //console.log(getcalljson);
      console.log(getcalltext);
      expect(getcallresponse.status()).toBe(404);
      expect(getcalltext).toBe('Not Found');
      //expect(getcallresponse.ok).toBeFalsy();

      //https://checkly.com-api-playground.vercal.app/app/prime/
})