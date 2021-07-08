const { test, expect } = require('@playwright/test');

test('Test 2', async ({page}) => {
    
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
      expect(page.url()).toBe('https://app.front.workwolf.com/dashboard');
    
      // Click text="Manage my Viewers"
      await page.click('text="Manage my Viewers"');
      expect(page.url()).toBe('https://app.front.workwolf.com/access/viewers');
    
      // Click //header[starts-with(normalize-space(.), 'Dashboard Digital Work Passport Orders CartAbout usProductsSupportLog outDashboa')]/button/*[local-name()="svg"]
      await page.click('//header[starts-with(normalize-space(.), \'Dashboard Digital Work Passport Orders CartAbout usProductsSupportLog outDashboa\')]/button/*[local-name()="svg"]');
    
      // Click text=/.*Dashboard.*/
      await page.click('text=/.*Dashboard.*/');
      expect(page.url()).toBe('https://app.front.workwolf.com/dashboard');
    
      // Click text="Manage my Requests"
      await page.click('text="Manage my Requests"');
      expect(page.url()).toBe('https://app.front.workwolf.com/access/pending');
    
      // Click //*[local-name()="svg"]
      await page.click('//*[local-name()="svg"]');
    
      // Close page
      await page.close();
});