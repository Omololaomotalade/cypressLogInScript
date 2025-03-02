
/// <reference types ="Cypress"  />
import { LOGIN } from "./logInPom.cy"
describe("Log in", ()=>{
  it('Log in Testacse', ()=>{

    cy.visit("/login")
    cy.get(LOGIN.inputPhoneNumber).click().type(LOGIN.phoneNumber)
    cy.get(LOGIN.continueBttn).click()
    cy.wait(1000)
    cy.get(LOGIN.passWord1).click()
    cy.get(LOGIN.passWord2).click()
    cy.get(LOGIN.passWord3).click()
    cy.get(LOGIN.passWord4).click()
    cy.url().should('eq','https://staging.kongapay.com/dashboard')
  })

  // it('Negative Log in Testcase',()=>{
  //   cy.visit("https://staging.kongapay.com/login")
  //   cy.get('#rcc-decline-button').click()
  //   cy.get('[name="phoneNumber"]').type('08140058257')
  //   //cy.get('.min-h-\[21\.875rem\] > .max-h-\[3\.25rem\]').click()
  //   cy.get('button:contains("Continue")').click()
  //   //cy.get('.encrypted-circle w-[5.5rem] h-[4.25rem] flex justify-center items-center border-r border-slate-500 border-opacity-25 last-of-type:border-r-0').type('5050')
  //   cy.wait(10000)

  //   cy.get('img[src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AQMAAAAAMksxAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABtJREFUKJFjYBhSgP0AlCEPY9jjZrAPVsYQAQAD4hHbgWXRtwAAAABJRU5ErkJggg=="]').click()

  //   cy.get('img[src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AQMAAAAAMksxAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAEpJREFUKJFjYBhSwP4AlFH/Acr4/wNCM/6EMR5UwBg1aAwGBjijAoMB1c7ACDOZ+QGUwQ6zlB/GkG+AuQfdYEaYMcz//+BiDBUAAADcGIbxJ3uiAAAAAElFTkSuQmCC"]').click()

  //   cy.get('img[src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AQMAAAAAMksxAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAE9JREFUKJFjYBhSwP4AlPH/A4Rm/P8DyvgJZTA/qIEyDtjAGHaEGQ/qoIzf/2Am/4PZdQ9m+z6YO+AmwxgPKqC6PsLcA3Mhw/8H6I4fIgAAd/kevuRecBoAAAAASUVORK5CYII="]').click()

    
  //   cy.get('img[src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AQMAAAAAMksxAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAEdJREFUKJFjYBhSoP4AlPH/A4Rm/P8DyvgIZTA/qIEyDmAwHlRAFf/+gWYOw/8HaAYyww1EmGODmwFT8+EPmjkIK+COHyIAAJ5eIn9BdiaJAAAAAElFTkSuQmCC"]').click()

    
  //   cy.get('div:contains("Wrong secret code, 4 attempt(s) left")')
  //   //class="text-center text-slate-500 text-sm font-medium font-['Plus Jakarta Sans'] leading-[1.3rem] "

  })

