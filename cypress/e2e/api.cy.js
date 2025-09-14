describe('API Tests', () => {
  it('GET /api/productsList - should return a list of products', () => {
    cy.request('GET', 'https://www.automationexercise.com/api/productsList')
      .then((response) => {
        expect(response.status).to.eq(200)

        // convertr body to JSON if it's a string
        const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body

        expect(body).to.have.property('products')
        expect(body.products).to.be.an('array') // assert that products is an array
      })
  })
})

describe('API Tests', () => {
  it('GET /api/productsList - should return a list of products', () => {
    cy.request('GET', 'https://www.automationexercise.com/api/productsList')
      .then((response) => {
        expect(response.status).to.eq(200)

        // convertr body to JSON if it's a string
        const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body  
        expect(body.products).to.have.length(34) // assert that there are 34 products
         })
          })
           })
        