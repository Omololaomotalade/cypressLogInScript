import { TRANSACTIONHISTORY, LOGIN } from "./logInPom.cy"
describe("Transaction History", ()=>{
  it('Transaction History Testacse', ()=>{

    cy.visit("/login")
    cy.get(LOGIN.inputPhoneNumber).click().type(LOGIN.phoneNumber)
    cy.get(LOGIN.continueBttn).click()
    cy.wait(1000)
    cy.get(LOGIN.passWord1).click()
    cy.get(LOGIN.passWord2).click()
    cy.get(LOGIN.passWord3).click()
    cy.get(LOGIN.passWord4).click()
    cy.url().should('eq','https://staging.kongapay.com/dashboard')
    cy.wait(200)
    cy.get(TRANSACTIONHISTORY.historylocator).click()
    cy.url().should('eq',TRANSACTIONHISTORY.assertUrl)

  })
})