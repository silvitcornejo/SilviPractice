const selectors = {
    page_body: '.header-middle',
}

Cypress.Commands.add("checkPageIsUp", () => {
    cy.get(selectors.page_body).should('be.visible')
})

