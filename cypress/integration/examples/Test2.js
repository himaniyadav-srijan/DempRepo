/// <reference types="Cypress" />

describe('this is my first test suite',function(){

it('this is my first testcase',function(){

cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
cy.get('.search-keyword').type('ca')
cy.get(2000)
cy.get('.product').should('have.length',5)
cy.get('.product:visible').should('have.length',4)
cy.get('.products').find('.product').should('have.length',4)
cy.get('.products').find('.product').eq('1').contains('ADD TO CART').click()

cy.get('.products').find('.product').each(($el, index, $list) => {

   const veg= $el.find('h4.product-name').text()

if (veg.includes('Cashew'))

   {
     cy.wrap($el).find('button').click()
   }

})

   
})

it('this is my second testcase',function(){
cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
cy.get('.search-keyword').click()
cy.get('.products').find('.product').each(($el, index, $list) => {
  const Textveg= $el.find('h4.product-name').text()
  if(Textveg.includes('Carrot'))
  {
    cy.wrap($el).find('.increment').click()
    cy.wrap($el).contains('ADD TO CART').click()
  }
cy.get('.cart-icon').click()

})
})
})