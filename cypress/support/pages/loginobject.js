class loginobject {
  // Locators
  usernameInput() {
    return cy.get('[name= "username"]');

    // cy.get('[name="username"]')
  }

  passwordInput() {
    return cy.get('[name="password"]');
  }

  loginButton() {
    return cy.get('[type="submit"]');
  }

  // Actions
  visit() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  }

  login(username, password) {
    this.usernameInput().type(username);
    this.passwordInput().type(password);
    this.loginButton().click();
  }
}
export default loginobject;
