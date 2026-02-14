describe("GET API Test", () => {
  it("Get list of users", () => {
    cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.page).to.eq(2);
      expect(response.body.data.length).to.be.greaterThan(0);
      expect(response.duration).to.be.lessThan(1000);
    });
  });
});
