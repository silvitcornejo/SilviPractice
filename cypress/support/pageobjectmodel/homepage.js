Cypress.Commands.add('SignUpButtonPresence', () => {
    cy.get('a[href="/login"]')  
      .should('be.visible')     
      .click()
})

