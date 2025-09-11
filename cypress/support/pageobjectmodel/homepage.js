Cypress.Commands.add('CarrouselPresence', () => {
    cy.get('#slider-carousel')
        .should('be.visible')
})

Cypress.Commands.add('CarrouselFunctionality', (selector) => {
  cy.get(selector).within(() => {
    cy.wait(600) // ajusta según la animación
    cy.get('.item.active').should('have.length', 1)
  })
})