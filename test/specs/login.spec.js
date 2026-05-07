/// <reference types="webdriverio" />
/// <reference types="@wdio/mocha-framework" />
/// <reference types="@wdio/appium-service" />

describe('Swag Labs Login', () => {

  before(async () => {
    await driver.startActivity("com.swaglabsmobileapp", "com.swaglabsmobileapp.MainActivity");
    await driver.setTimeout({ implicit: 2000 });
  });

  it('should login with valid credentials', async () => {
    const usernameField = await $('~test-Username');
    const passwordField = await $('~test-Password');
    const loginButton = await $('~test-LOGIN');

    await usernameField.setValue('standard_user');
    await passwordField.setValue('secret_sauce');
    await loginButton.click();

    const productsTitle = await $('~test-PRODUCTS');
    await expect(productsTitle).toBeDisplayed();
  });

});