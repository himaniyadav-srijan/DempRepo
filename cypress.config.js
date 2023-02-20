const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://yamaha-api-poc-development.devops-t3.com/",
  
    specPattern: 'cypress/integration/LocalServices/Health//*.js',
    specPattern: 'cypress/integration/LocalServices/cart//*.js',
    specPattern: 'cypress/integration/LocalServices/Parts/Services/Image//*.js'
   
    
  
   
  
  },
});
