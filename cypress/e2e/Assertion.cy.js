describe("Implicit Assertion", ()=>{
  it("Implicit Assertions", ()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.url().should('include', 'orangehrmlive.com')
    .should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    .should('contain', 'orangehrm')
  })

})