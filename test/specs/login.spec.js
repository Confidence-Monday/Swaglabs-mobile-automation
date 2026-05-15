describe('Swag Labs Login', () => {

  beforeEach(async () => {
    const usernameField = await $('~test-Username')
    await usernameField.waitForDisplayed({ timeout: 30000 })
  })

  it('should show error on empty login', async () => {
    const loginBtn = await $('~test-LOGIN')
    await loginBtn.click()
    const error = await $('~test-Error Message')
    await error.waitForDisplayed({ timeout: 10000 })
    await expect(error).toBeDisplayed()
  })

  it('should show error on invalid credentials', async () => {
    const username = await $('~test-Username')
    const password = await $('~test-Password')
    const loginBtn = await $('~test-LOGIN')
    await username.setValue('wrong_user')
    await password.setValue('wrong_pass')
    await loginBtn.click()
    const error = await $('~test-Error Message')
    await error.waitForDisplayed({ timeout: 10000 })
    await expect(error).toBeDisplayed()
  })

  it('should login successfully with valid credentials', async () => {
    const username = await $('~test-Username')
    const password = await $('~test-Password')
    const loginBtn = await $('~test-LOGIN')
    await username.setValue('standard_user')
    await password.setValue('secret_sauce')
    await loginBtn.click()
    const products = await $('~test-Cart drop zone')
    await products.waitForDisplayed({ timeout: 30000 })
    await expect(products).toBeDisplayed()
  })

})