const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://yamaha-api-poc-development.devops-t3.com/",
  
    specPattern: 'cypress/integration/Local Services/Health//*.js',
    specPattern: 'cypress/integration/Local Services/cart//*.js',
    specPattern: 'cypress/integration/Local Services/Parts/Services/Image'
    
  
   
  
  },
});
