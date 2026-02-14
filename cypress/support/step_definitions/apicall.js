import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
let endpoint;
let response;
Given("Enter the end points", () => {
  // You can parameterize this if needed
  endpoint = "https://reqres.in/api/users/2";
});
When("Hit the url", () => {
  cy.request({
    method: "GET",
    url: endpoint,
    headers: {
      "x-api-key": "reqres_8a7cc96555d94f9e9b95518cec680a78",
    },
  }).then((res) => {
    response = res;
  });
});
Then("check status code 200", () => {
  expect(response.status).to.eq(200);
  expect(response.body.data).to.have.property("id");
});
//Hit the url withbody
When("Hit the url withbody", () => {
  cy.request({
    method: "POST",
    url: "https://reqres.in/api/register",
    body: {
      name: "morpheusABHISHEK",
      job: "leader",
    },
    headers: {
      "x-api-key": "reqres_8a7cc96555d94f9e9b95518cec680a78",
      "Content-Type": "application/json",
    },
  });
});
