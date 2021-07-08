const { test, expect } = require('@playwright/test');

test('Test 7', async ({page}) => {
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

// Click text="+ Add Reference"
await page.click('text="+ Add Reference"');
expect(page.url()).toBe('https://app.front.workwolf.com/add-reference');

// Click input[name="firstName"]
await page.click('input[name="firstName"]');

// Fill input[name="firstName"]
await page.fill('input[name="firstName"]', 'Steven ');

// Click input[name="lastName"]
await page.click('input[name="lastName"]');

// Fill input[name="lastName"]
await page.fill('input[name="lastName"]', 'Xu');

// Click input[name="email"]
await page.click('input[name="email"]');

// Fill input[name="email"]
await page.fill('input[name="email"]', 'sfxu@uwaterloo.ca');

// Click input[name="phone"]
await page.click('input[name="phone"]');

// Fill input[name="phone"]
await page.fill('input[name="phone"]', '4162586539');

// Click input[name="refereeTitle"]
await page.click('input[name="refereeTitle"]');

// Fill input[name="refereeTitle"]
await page.fill('input[name="refereeTitle"]', 'Hnads');

// Click input[name="company"]
await page.click('input[name="company"]');

// Fill input[name="company"]
await page.fill('input[name="company"]', 'Test');

// Click div[id="app"]
await page.click('div[id="app"]');

// Click //div[starts-with(normalize-space(.), 'Please provide your reference’s informationFIRST NAME *LAST NAME *EMAIL *PHONE N')]
await page.click('//div[starts-with(normalize-space(.), \'Please provide your reference’s informationFIRST NAME *LAST NAME *EMAIL *PHONE N\')]');    

// Click input[name="company"]
await page.click('input[name="company"]');

// Click input[name="candidateTitle"]
await page.click('input[name="candidateTitle"]');

// Fill input[name="candidateTitle"]
await page.fill('input[name="candidateTitle"]', 'Test');

// Click input[name="startDate"]
await page.click('input[name="startDate"]');

// Press ArrowRight
await page.press('input[name="startDate"]', 'ArrowRight');

// Fill input[name="startDate"]
await page.fill('input[name="startDate"]', '2020-06-25');

// Click input[name="endDate"]
await page.click('input[name="endDate"]');

// Press ArrowRight
await page.press('input[name="endDate"]', 'ArrowRight');

// Fill input[name="endDate"]
await page.fill('input[name="endDate"]', '2020-12-25');

// Click text="VERIFY REFERENCE"
await page.click('text="VERIFY REFERENCE"');

// Click text="CLOSE"
await page.click('text="CLOSE"');

// Click //*[local-name()="svg"]
await page.click('//*[local-name()="svg"]');

// Close page
await page.close();
});