describe("My First Test", () => {
  it("Verif if title is valid", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.title().should("eq", "OrangeHRM1");
    //expect(true).to.equal(true)
  });

  it("Verify if title is not valid", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.title().should("not.eq", "OrangeHRM123");
    //cy.screenshot();

    // expect(true).to.equal(true)

    //npx cypress run --spec "cypress/e2e/myfirst.cy.js"
  });
});
