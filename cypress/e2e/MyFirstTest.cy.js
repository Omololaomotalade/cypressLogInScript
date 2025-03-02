const cypress = require("cypress")

describe('CSSLocators',() =>{
  it("csslocators", () =>{
     cy.visit("https://www.konga.com")

     cy.get("#jsSearchInput").type("T-Shirts") // id tag is optional
     cy.get("[class name ='search']").click()
     
     
  })
}) 