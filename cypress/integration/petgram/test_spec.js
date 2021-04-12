/* global describe, it, cy */
describe('Petgram', function () {
  it('PAra ver si la pagina funciona', function () {
    cy.visit('/')
  })
  it('Navegamos a una categoria y vemos fotos', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })
  it('si podemos navegar a la navbar a la home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })
  it('los usuarios no registrados ven  el formulario de inicio de sesion al ir a favs', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
