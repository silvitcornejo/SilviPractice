context('Verify that the Signup Login page is visible successfully', () => {
  beforeEach(() => {
    cy.visit('https://www.automationexercise.com/login') 
    cy.checkPageIsUp() // Custom command to check if the page loaded
  })


describe('Sign Up functionality', () => {
it('should display the Sign Up button', () => {
    cy.SignUpButtonPresence() // Custom command to verify the button
    })        

it('should show the "New User Signup" section', () => { 
    cy.NewUserSignUp() // Custom command to verify the title section
     })  

it ('Enter name and email address', () => {
    cy.EnterNameAndEmail() // Custom command to enter name and email  
    })   
})    


describe('Login to your account', () => {
    it('Functionality of Login to your account section with an invalid user', () => {
    cy.LoginToYourAccount() // Custom command to login funcionality 
     }) 
     })

describe('Subscription section', () => {
    it( 'Functionality of Subscription section', () => {
    cy.Subscription() // Custom command to subscribe funcionality 
     })
     })
     })