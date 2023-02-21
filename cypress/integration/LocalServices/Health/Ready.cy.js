
let baseUrl='https://yamaha-api-poc-development.devops-t3.com/'


describe('HealthAPI',()=>{

it('First Health Api',()=>{

    cy.getToken()

    cy.request({
        
        url: '${baseUrl}/v1.0.0/health/ready/',
        method: 'GET'
    
    
})
    .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property("meta","data")
    
      })
    

})

})