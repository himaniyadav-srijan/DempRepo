let baseUrl= 'https://yamaha-api-poc-development.devops-t3.com/'

describe('get image test',()=>{

    it('get image',()=>{
    
    cy.getToken()
    cy.request({

        url : '${baseUrl}/v1.0.0/parts/c/image/view/25438570',
        method : 'GET',
      
    }).then((respnse)=>{
      expect(respnse.status).to.eq(200)
      expect(respnse.body.data.image).to.not.be.null;
      expect($img[0].naturalWidth).to.be.greaterThan(0);


    })

     

    })

})