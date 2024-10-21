const LoginPage = require('./../po/pages/login.page');
const { expect} = require('@wdio/globals')
const loginPage = new LoginPage();

describe('EPAM TEST', () => {
    

    beforeEach(async () => {
        await loginPage.open();
    })
    
    it('UC-3 Test Login form with credentials by passing Username & Password:', async () => {
        
        await loginPage.EnterCredentials('standard_user','secret_sauce')
        await loginPage.ClickLogin();
        await expect(loginPage.header).toHaveText("Swag Labs");
            
        })

})