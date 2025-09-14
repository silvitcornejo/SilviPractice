context('Verify that the Signup Login page is visible successfully', () => {
  beforeEach(() => {
    cy.visit('https://www.automationexercise.com/') 
    cy.checkPageIsUp() // Custom command to check if the page loaded
  })

  describe('Header elements', () => {
    it('should display all header elements', () => {
    cy.HeaderElementsPresence() // Custom command to verify header elements
  })
 })

 describe('Subscription footer', () => {
  it('should display all footer elements', () => {
    cy.SubscriptionFooterPresence() // Custom command to verify Subscription footer
  })
  })
    })