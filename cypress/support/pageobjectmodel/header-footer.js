Cypress.Commands.add('HeaderElementsPresence', () => {
  cy.get('.header-middle')
    .should('be.visible')
    .within(() => {
      cy.get('ul')
        .should('exist')
        .find('li')
        .should('have.length', 8)
        .each(($li) => {
          cy.wrap($li).should('be.visible')
          .find('a')
            .should('have.attr', 'href');
        })
    })
})

    
Cypress.Commands.add('SubscriptionFooterPresence', () => {
  cy.get('h2').contains('Subscription')   
    .should('be.visible')   
    cy.get('#susbscribe_email') 
    .should('be.visible')   
    .type('silvi.cornejo@gmail.com')
    cy.get('#subscribe') 
    .should('be.visible')   
    .click()
    cy.get('.alert-success') 
    .should('be.visible')   
    .and('contain', 'You have been successfully subscribed!')
    })