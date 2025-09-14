describe('API Tests', () => {
    let productsBody

    before (() => {
        cy.fixture('products.json').then((data) => {
            productsBody = data                                                 
            }) 
            }) 
        

  it('should return status 200 and products array', () => {       
        expect(productsBody).to.have.property('products')
        expect(productsBody.products).to.be.an('array') // assert that products is an array
      })


  it('should return a list of 34 products', () => {
        expect(productsBody.products).to.have.length(34) // assert that there are 34 products})
    })
  })         
