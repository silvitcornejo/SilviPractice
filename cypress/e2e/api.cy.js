describe('API Tests', () => {
    let productsBody

    before (() => {
        cy.request('GET', 'https://www.automationexercise.com/api/productsList')
        .then((response) => {
            expect(response.status).to.eq(200)

            // convertr body to JSON if it's a string
            productsBody = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
            }) 
            }) 
        

  it('GET /api/productsList - should return status 200 and products array', () => {       
        expect(productsBody).to.have.property('products')
        expect(productsBody.products).to.be.an('array') // assert that products is an array
      })


  it('GET /api/productsList - should return a list of 34 products', () => {
        expect(productsBody.products).to.have.length(34) // assert that there are 34 products})
    })
  })         
