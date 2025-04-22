// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './authsessionpract',
  //grep: /@smoke|@UI/,//@smoke
  //globalSetup: './global-auth-setup',
    
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  //!forbidOnly: true, this is 2nd option
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  //! retries: 1, this is 2nd option
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { open: 'off' }], ['allure-playwright']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    //  baseURL: 'https://restful-booker.herokuapp.com', //!this is global setup for api base url
    //  extraHTTPHeaders: {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json',
    //   Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=",
    //  },
    // expect: {
    //   toHaveScreenshot: {
    //     maxDiffPixelRatio: 0.4,
    //     maxDiffPixels: 200,
    //   },
    // },

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    screenshots: 'only-on-failure',
    video: 'on-first-retry',
    //storageState: './globalauth/setup1.json',
  },
  
  /* Configure projects for major browsers */
  projects: [
    {
    name: 'setup',
    testMatch: 'authpractice.spec.js',
    },

    {
      name: 'chromium',
      dependencies: ['setup'],
      use: { ...devices['Desktop Chrome'],
        storageState: 'authState.json',
       },
      
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

