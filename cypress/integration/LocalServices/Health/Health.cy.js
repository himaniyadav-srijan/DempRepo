
let baseUrl='https://yamaha-api-poc-development.devops-t3.com/'


describe('HealthAPI',()=>{

it('First Health Api',()=>{

    cy.getToken()

    cy.request({
        
        url: '${baseUrl}/v1.0.0/health/health/',
        method: 'GET'
    
})

    .then((response) => {
        cy.log(JSON.stringify(response))
        expect(response.status).to.eq(200)
        expect(response.body.meta.version).to.eq('v1.0.0')
        expect(response.body.data.name).to.not.be.null
        expect(response.body.data.connected).to.eq(true)
        ////expect(response.body.data.name).to.eq("ready")

    
    
      })
    

})

})