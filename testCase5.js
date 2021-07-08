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

  // Click text="Products"
  await page.click('text="Products"');
  // assert.equal(page.url(), 'https://app.front.workwolf.com/products/packages');

  // Click text="CORPORATE VERIFICATIONS"
  await page.click('text="CORPORATE VERIFICATIONS"');
  // assert.equal(page.url(), 'https://app.front.workwolf.com/products/corporate');

  // Click text="SELECT"
  await page.click('text="SELECT"');

  // Click text="ADD"
  await page.click('text="ADD"');

  // Click text="SKIP TO CHECKOUT"
  await page.click('text="SKIP TO CHECKOUT"');
  // assert.equal(page.url(), 'https://app.front.workwolf.com/cart/summary');

  // Click //tr[3]/td[5]/button/span[normalize-space(.)='Remove']
  await page.click('//tr[3]/td[5]/button/span[normalize-space(.)=\'Remove\']');

  // Click text="Remove"
  await page.click('text="Remove"');

  // Click //*[local-name()="svg"]
  await page.click('//*[local-name()="svg"]');

  // Close page
  await page.close();
})();