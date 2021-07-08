const { chromium } = require('playwright');

//use this line of code if you want to apply all the assertions
var assert = require('assert');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

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

  // Click //header[starts-with(normalize-space(.), 'Dashboard Digital Work Passport Orders CartAbout usProductsSupportLog outDashboa')]/button/*[local-name()="svg"]
  await page.click('//header[starts-with(normalize-space(.), \'Dashboard Digital Work Passport Orders CartAbout usProductsSupportLog outDashboa\')]/button/*[local-name()="svg"]');

  // Click text=/.*Dashboard.*/
  await page.click('text=/.*Dashboard.*/');
  // assert.equal(page.url(), 'https://app.front.workwolf.com/dashboard');

  // Click text="VIEW ADD-ONS"
  await page.click('text="VIEW ADD-ONS"');
  // assert.equal(page.url(), 'https://app.front.workwolf.com/products/boosters');

  // Click text="ADD"
  await page.click('text="ADD"');

  // Click text="CONTINUE"
  await page.click('text="CONTINUE"');
  // assert.equal(page.url(), 'https://app.front.workwolf.com/cart/summary');

  // Click //button[normalize-space(.)='Remove']/*[local-name()="svg"]
  await page.click('text="Remove"');

  // Click //*[local-name()="svg"]
  await page.click('//*[local-name()="svg"]');

  // Close page
  await page.close();
})();