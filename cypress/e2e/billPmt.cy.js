import { BILLSPMT, SENDFUNDS, LOGIN } from "./logInPom.cy";


describe('Bills Payment', () => {
  beforeEach(() => {
    cy.visit("/login")
    cy.get(LOGIN.inputPhoneNumber).click().type(LOGIN.phoneNumber)
    cy.get(LOGIN.continueBttn).click()
    cy.wait(1000)
    cy.get(LOGIN.passWord1).click()
    cy.get(LOGIN.passWord2).click()
    cy.get(LOGIN.passWord3).click()
    cy.get(LOGIN.passWord4).click()
    cy.url().should('eq','https://staging.kongapay.com/dashboard')
  });

  it('Airtime', () => {
    //Test logic
    cy.get(BILLSPMT.airtimeBttn).click();
    cy.wait(100);
    cy.get(BILLSPMT.airtimePhoneNumber).click().type(BILLSPMT.phnNo)
    cy.get(BILLSPMT.network).click()
    //cy.contains(BILLSPMT.networkList, 'MTN').click()
    //cy.get(BILLSPMT.networkList).click()
    cy.wait(3000)
    cy.get(BILLSPMT.searchNetwork).type('MTN').click()
    cy.get(".text-sm").contains('MTN').click()
    cy.wait(2000)
    cy.get(BILLSPMT.airtimeAmount).click().type(BILLSPMT.amount)
    cy.get(BILLSPMT.confirmBttn).click()
    cy.wait(1000)
    cy.get(SENDFUNDS.passWord5).click()
   cy.get(SENDFUNDS.passWord6).click()
   cy.get(SENDFUNDS.passWord7).click()
   cy.get(SENDFUNDS.passWord8).click()
   cy.wait(2000)
   cy.get(BILLSPMT.airtimeValidateSuccessText).should('have.text', 'Transaction Successful!')
  });

  it('DATA', () => {
  //   // Test logic
  cy.get(BILLSPMT.dataBttn).click();
  cy.get(BILLSPMT.airtimePhoneNumber).type(BILLSPMT.phnNo)
  cy.get(BILLSPMT.dataNetwork).click()
  cy.get(BILLSPMT.searchData).type('AIRTEL')
  cy.wait(2000)
  cy.get(BILLSPMT.airtelBttn).click()
  cy.wait(2000)
  cy.get(BILLSPMT.planBttn).click()
  cy.get(BILLSPMT.searchPlan).click()
  cy.get(BILLSPMT.planData).click()
  cy.get(BILLSPMT.confirmBttn).click()
  cy.wait(1000)
  cy.get(SENDFUNDS.passWord5).click()
 cy.get(SENDFUNDS.passWord6).click()
 cy.get(SENDFUNDS.passWord7).click()
 cy.get(SENDFUNDS.passWord8).click()
 cy.wait(2000)
 cy.get(BILLSPMT.airtimeValidateSuccessText).should('have.text', 'Transaction Successful!')
  });
});
