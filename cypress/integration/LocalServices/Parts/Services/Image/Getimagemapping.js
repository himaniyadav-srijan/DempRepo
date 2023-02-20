let baseUrl= 'https://yamaha-api-poc-development.devops-t3.com/'

describe('image mapping test',()=>{

    it('get image mapping',()=>{
     cy.getToken()

     cy.request({

        url: '${baseUrl}/v1.0.0/parts/c/image/mapping/25438570',
        method: 'GET'
        
     }).then((response)=>{

        expect(response.status).to.be.eq(200)
        expect(response.body.data).to.not.be.null

     })

    })
    

})