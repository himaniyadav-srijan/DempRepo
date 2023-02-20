// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add("getToken", () => {
  
    cy.request({
      url: 'https://yamaha-api-poc-development.devops-t3.com/v1.0.0/auth/',
      method: "POST",
      form: true,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      
    })
      .then((response) => {
        Cypress.env("token", response.body.access_token);
        return response;
      })
      .its("status")
      .should("eq", 200);
  });