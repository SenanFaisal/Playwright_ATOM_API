const loginSelectors = require('../selectors/loginSelectors.js')
const loginData = require('../fixtures/loginData.js')
const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('Google Authentication and Save Session', async ({ page }) => {
    await page.goto('https://atom.stage.dmclinical.com/');

    const [googlePopup] = await Promise.all([
        page.waitForEvent(),
        page.click(loginSelectors.BTN_SignIn)
    ]);

    await googlePopup.fill(loginSelectors.TXT_Email, loginData.Email_Id);
    await googlePopup.click(loginSelectors.BTN_Next);
    await googlePopup.fill(loginSelectors.TXT_Password, loginData.Password_Id);
    await googlePopup.click(loginSelectors.BTN_Next);

    await googlePopup.waitForNavigation();

    await page.waitForNavigation();
    expect(page.url()).toBe('https://atom.stage.dmclinical.com/');

    const storageState = await page.context().storageState();
    fs.writeFileSync('auth-session.json', JSON.stringify(storageState));
});