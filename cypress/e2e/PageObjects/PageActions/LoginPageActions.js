const loginElements = require('../PageElements/LoginPageElements.json');

export class loginPageElements {
   enterUsername(username) {
      cy.get(loginElements.LoginPage.usernameInput).type(username);
      return;
   }

   enterPassword(password) {
      cy.get(loginElements.LoginPage.passwordInput).type(password);
      return;
   }

   clickLogin() {
      cy.get(loginElements.LoginPage.loginButton).click();
      return;
   }
}
