import { LOGOUT, LOGIN } from "./logInPom.cy"
describe("Log out", ()=>{
  it('Log out Testacse', ()=>{

    cy.visit("/login")
    cy.get(LOGIN.inputPhoneNumber).click().type(LOGIN.phoneNumber)
    cy.get(LOGIN.continueBttn).click()
    cy.wait(1000)
    cy.get(LOGIN.passWord1).click()
    cy.get(LOGIN.passWord2).click()
    cy.get(LOGIN.passWord3).click()
    cy.get(LOGIN.passWord4).click()
    cy.url().should('eq',LOGOUT.dashboardUrlAssertion)
    cy.wait(1000)
    cy.get(LOGOUT.profile).click()
    cy.get(LOGOUT.logout).click()
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal(LOGOUT.assertion)})
    cy.wait(100)
    cy.get(LOGOUT.yesButtn).click()
    cy.url().should('eq',LOGOUT.logInassertion)
    

  })
  })