describe("POST API Test", () => {
  it("Create new user", () => {
    cy.request({ method: "GET", url: "https://reqres.in/api/users/2" })

      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.have.property("id");
        expect(response.body.data.first_name).to.eq("Janet");
      });
  });
});
