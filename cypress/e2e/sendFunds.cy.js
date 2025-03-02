

import { SENDFUNDS, LOGIN } from "./logInPom.cy"

describe("Send Money", ()=>{
  it('Send Money Testacse', ()=>{

    cy.visit("/login")
    cy.get(LOGIN.inputPhoneNumber).click().type(LOGIN.phoneNumber)
    cy.get(LOGIN.continueBttn).click()
    cy.wait(1000)
    cy.get(LOGIN.passWord1).click()
    cy.get(LOGIN.passWord2).click()
    cy.get(LOGIN.passWord3).click()
    cy.get(LOGIN.passWord4).click()
    cy.url().should('eq','https://staging.kongapay.com/dashboard')
    cy.wait(2000)
    cy.get(SENDFUNDS.sendLocator).click()
   
    cy.wait(10000)
   cy.get(SENDFUNDS.accountNumberInput).click().clear().type(SENDFUNDS.accountNumber, {delay:2})
   cy.wait(100)
   cy.get(SENDFUNDS.inputBank).should('be.visible')
   cy.contains(SENDFUNDS.inputBank, 'Sterling Bank').click();
   cy.get(SENDFUNDS.amountInput).click().type(SENDFUNDS.amount) 
   cy.get(SENDFUNDS.continueBttn).click()
   cy.url().should('eq', SENDFUNDS.urlAssertion)
   cy.wait(100)
   cy.get(SENDFUNDS.passWord5).click()
   cy.get(SENDFUNDS.passWord6).click()
   cy.get(SENDFUNDS.passWord7).click()
   cy.get(SENDFUNDS.passWord8).click()

   })
    
  })



