/// <reference types="cypress"/

import { SIGNUP } from "./logInPom.cy.js"


describe ('Create an account', ()=>{
beforeEach (()=>{
   cy.visit('/signup')
})
it('User should be able to signup successfully',()=>{
   // cy.get ('#rcc-decline-button').click()
   // //cy.get('.hover\:bg-\[--konga-pink\]').click()
   // cy.get('a[href="/signup"]').click()
   cy.get(SIGNUP.emailField).type(SIGNUP.emailAdd)
   cy.get(SIGNUP.phoneNo).type(SIGNUP.phoneDetails)
   cy.get(SIGNUP.occuPation).click()
   cy.wait(2000),
  cy.get(SIGNUP.dropdown).click ({force:true})
  //  cy.get('.text-center ').should('contain','Already have an account?')
   //cy.get('button:contians("Continue")').click({force:true})
   cy.get(SIGNUP.continueBttn1).click()
   cy.get(SIGNUP.otp1).type(SIGNUP.otp)
   cy.get(SIGNUP.otp2).type(SIGNUP.otp)
   cy.get(SIGNUP.otp3).type(SIGNUP.otp)
   cy.get(SIGNUP.otp4).type(SIGNUP.otp)
   cy.get(SIGNUP.otp5).type(SIGNUP.otp)
   cy.get(SIGNUP.otp6).type(SIGNUP.otp)
   cy.get(SIGNUP.getStarted).click()

   //'button:contains("Continue")',

   


})
})