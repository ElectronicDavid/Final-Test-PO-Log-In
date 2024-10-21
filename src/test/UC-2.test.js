const LoginPage = require('./../po/pages/login.page');
const { expect} = require('@wdio/globals')
const loginPage = new LoginPage();

describe('EPAM TEST', () => {

    beforeEach(async () => {
        await loginPage.open();
    })
    
    it('UC-2 Test Login form with credentials by passing', async () => {
            await loginPage.EnterCredentials('standard_user','secret_sauce')
            await loginPage.open();  
            await loginPage.EnterCredentials('standard_user','')
            await loginPage.ClickLogin();
            //Check the error messages: "Password is required".
            await expect(loginPage.errEmptyUser).toHaveText("Epic sadface: Password is required");
        })

})