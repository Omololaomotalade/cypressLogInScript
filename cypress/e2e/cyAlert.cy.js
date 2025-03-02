describe('ALerts', ()=>{

  it('Simple Alert',()=>{

    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

    cy.get(':nth-child(1) > button').click();
  })
})