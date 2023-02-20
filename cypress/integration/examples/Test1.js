//cypress-spec file
// node_modules/.bin/cypress open [open cypress]
// node_modules/.bin/cypress run [run cypress in headless mode]
// node_modules/.bin/cypress run --headed [run cypress in headed mode]
// mkdir cypress for making new folder named as cypress
// cd cypress means to navigate to cypress folder
// npm i -init for creating one package.json type

//to visit any URL;

/// <reference types="Cypress" />
describe('My First Suite', function()
{

it('My FirstTest case', function(){

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.product').should('have.length',5)
cy.get('.product:visible').should('have.length',4)
//parent child chaining
cy.get('.products').find('.product').should('have.length',4)
//click on add to cart button for second product
cy.get('.products').find('.product').should('have.length',4).eq(2).contains('ADD TO CART').click()
// if product position is keep changing then we can use each method 
cy.get('.products').find('.product').each(($el, index, $list) => {
 const textveg=$el.find('h4.product-name').text()

 if(textveg.includes('Cashew'))
 {
    cy.wrap($el).find('button').click()
 }

})
})
})
    