Cypress.Commands.add('SignUpButtonPresence', () => {
    cy.get('a[href="/login"]')  
      .should('be.visible')     
      .click()
})

Cypress.Commands.add('NewUserSignUp', () => { 
  cy.get('h2').contains('New User Signup!')   
    .should('be.visible')
})

Cypress.Commands.add('EnterNameAndEmail', () => {
  cy.get('[data-qa="signup-name"]')
    .should('be.visible')
    .type('SilClient2')
  cy.get('[data-qa="signup-email"]')
    .type('silvi.cornejo@gmail.com')
    cy.get('[data-qa="signup-button"]')
    .click()
})

Cypress.Commands.add('LoginToYourAccount', () => {
  cy.get('h2').contains('Login to your account')   
    .should('be.visible')
  cy.get('[data-qa="login-email"]') 
    .should('be.visible')
    .type('silvi_cornejoo@hotmail.com')
  cy.get('[data-qa="login-password"]') 
    .should('be.visible')
    .type('Silvi1234')
  cy.get('[data-qa="login-button"]')
    .click()
  cy.get('p').contains('Your email or password is incorrect!')   
    .should('be.visible')   
})



Cypress.Commands.add('Subscription', () => {
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