context('Verify that the home page is visible successfully', () => {
  beforeEach(() => {
    cy.visit('') 
    cy.checkPageIsUp() // Custom command to check if the page loaded
  })
})