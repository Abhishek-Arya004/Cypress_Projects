import loginobject from "../../support/pages/loginobject";

// .. cypreess/e2e

//../../

//cypress/support/pages/loginobject.js

describe("Login Test Suite", () => {
  // const Login_object1 = new loginobject();

  it("Should login successfully", () => {
    const Login_object1 = new loginobject();
    Login_object1.visit();
    Login_object1.login("Admin", "admin123");
    cy.url().should("include", "/dashboard");
  });
});
