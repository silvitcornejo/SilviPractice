context('Verify that the Signup Login page is visible successfully', () => {
  beforeEach(() => {
    cy.visit('https://www.automationexercise.com/login') 
    cy.checkPageIsUp() // Custom command to check if the page loaded
  })


describe('Sign Up functionality', () => {
it('Sign Up button should display', () => {
    cy.SignUpButtonPresence() // Custom command to verify the button presence
    })        

it('"New User Signup" section should be visible', () => { 
    cy.NewUserSignUp() // Custom command to verify the title section visibility
     })  

it ('Enter name and email address functionality', () => {
    cy.EnterValidNameAndEmailFields() // Custom command to enter name and email  
    })   
})    

describe('Login to your account', () => {
    it('Functionality of Login to your account section with an invalid user', () => {
    cy.LoginToYourAccount() // Custom command to login funcionality 
     }) 
     })
     })