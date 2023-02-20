let baseUrl= 'https://yamaha-api-poc-development.devops-t3.com/'

describe('Test image data',()=>{

    it('image should get loaded',()=>{

        cy.getToken()

        cy.request({
            method:'GET',
            url: '${baseUrl}/v1.0.0/parts/c/image/data/81042/75263/1194879/43615413/25438570'

        }).then((response)=>{

          expect(response.status).to.eq(200)
          expect(response.body.data.image).to.not.be.null;

        })
    })

})