import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("User is on login page", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
});

When(
  "User enters username {string} and password {string}",
  (username, password) => {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  },
);

Then(
  "Dashboard should be displayed for username {string} and password {string}",
  (username, password) => {
    if (username === "Admin" && password === "admin123") {
      cy.contains("Dashboard").should("be.visible");
    } else cy.get("p").should("contain.text", "Invalid credentials");
    console.log("Login test executed with username: " + username);
  },
);
