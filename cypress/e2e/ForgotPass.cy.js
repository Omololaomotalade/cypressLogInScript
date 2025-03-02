// <reference types="cypress"/>

import { FORGOTPASS } from "./logInPom.cy"
describe ('Validate Forgot passcode', ()=>{
// beforeEach (()=>{
  
// })
  it ("validate user successfully resetting passcode", ()=>{
    cy.visit('/forgot-password')
    cy.wait(1000)
    cy.get(FORGOTPASS.inputPhoneNumber).clear().click().type('08140058257')
    cy.get (FORGOTPASS.resetBttn).click()
    cy.wait(100)
    cy.get(FORGOTPASS.validateSuccessText).should('have.text', 'Pin Reset Successfully')
     
  })

})