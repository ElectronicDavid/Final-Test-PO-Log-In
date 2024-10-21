const LoginPage = require('./../po/pages/login.page');
const { expect} = require('@wdio/globals')
const loginPage = new LoginPage();


describe('EPAM TEST', () => {
    
    beforeEach(async () => {
        await loginPage.open();
    })
    
    it('UC-1 Test Login form with empty credentials:', async () => {

     
        await loginPage.EnterCredentials('standard_user','secret_sauce')
        await loginPage.open();  
        await loginPage.EnterCredentials('','secret_sauce')
        await loginPage.ClickLogin();
        const err = await loginPage.errEmptyUser.getText();
        await expect(loginPage.errEmptyUser).toHaveText("Epic sadface: Username is required");
        })
})