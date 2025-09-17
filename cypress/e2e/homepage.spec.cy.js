context('Verify that the home page is visible successfully', () => {
  beforeEach(() => {
    cy.visit('') 
    cy.checkPageIsUp() // Custom command to check if the page loaded
  })

  describe('Carousel functionality', () => {
    it('should display the carousel', () => {
      cy.CarrouselPresence(); // Custom command to verify the carousel presence
    })
    it('should verify the carousel functionality', () => {
      cy.CarrouselFunctionality('.col-sm-12'); // Custom command to verify the carousel functionality
    })
  })

  describe.only('Cart functionality', () => {
    it('Randomly add and remove products from the cart', () => {
      cy.AddProductsToCart(); // Custom command to add two random products to cart
      cy.RemoveProductsFromCart(); // Custom command to remove all products from cart and check if the cart is empty
    })  
})
})