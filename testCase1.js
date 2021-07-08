const { firefox } = require('playwright');

//use this line of code if you want to apply all the assertions
var assert = require('assert');

(async () => {
  const browser = await firefox.launch({
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

  // Click text="Reference Guide"
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('text="Reference Guide"')
  ]);

  // Close page
  await page1.close();

  // Click text="DOWNLOAD REPORT"
  await page.click('text="DOWNLOAD REPORT"');

  // 0× click
  await page.click('//div[starts-with(normalize-space(.), \'Packfinder - Personality AssessmentReference GuideCOMPLETEDShow Personality Asse\')]');    

  // Click //*[local-name()="svg"]
  await page.click('//*[local-name()="svg"]');

  // Close page
  await page.close();
})();