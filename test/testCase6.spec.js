const { test, expect } = require('@playwright/test');

test('Test 6', async ({page}) => {
// Go to https://app.front.workwolf.com/credentials
await page.goto('https://app.front.workwolf.com/credentials');

// Go to https://app.front.workwolf.com/
await page.goto('https://app.front.workwolf.com/');

// Go to https://app.front.workwolf.com/login
await page.goto('https://app.front.workwolf.com/login');

// Click input[name="email"]
await page.click('input[name="email"]');

// Fill input[name="email"]
await page.fill('input[name="email"]', 'sfxu@uwaterloo.ca');

// Press Enter
await page.press('input[name="email"]', 'Enter');

// Click input[name="password"]
await page.click('input[name="password"]');

// Press CapsLock
await page.press('input[name="password"]', 'CapsLock');

// Fill input[name="password"]
await page.fill('input[name="password"]', 'A');

// Press CapsLock
await page.press('input[name="password"]', 'CapsLock');

// Fill input[name="password"]
await page.fill('input[name="password"]', 'A26482648b#');

// Press Enter
await Promise.all([
  page.waitForNavigation(/*{ url: 'https://app.front.workwolf.com/credentials' }*/),
  page.press('input[name="password"]', 'Enter')
]);

// Click //*[local-name()="svg"]
await page.click('//*[local-name()="svg"]');

// Fill input[name="firstName"]
await page.fill('input[name="firstName"]', 'Steven');

// Go to https://app.front.workwolf.com/logout
await page.goto('https://app.front.workwolf.com/logout');

// Close page
await page.close();
});