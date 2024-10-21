class LoginPage {

      get usernameTextBox(){
          return $('#user-name')
      }
  
      get passwordTextBox(){
          return $('#password')
      }

      get loginbutton(){
          return $('#login-button')
      }

      get errEmptyUser(){
        return $('div[class="error-message-container error"]')
      }

      get header(){
        return $('div[class = "header_label"]')
      }
  
      async open (){
        await browser.url(`https://www.saucedemo.com/`);
      }

      async EnterCredentials(user, password){
            await this.usernameTextBox.setValue(user)
            await this.passwordTextBox.setValue(password)
      }

     async ClickLogin(){
      await this.loginbutton.click()
    }



}

module.exports = LoginPage