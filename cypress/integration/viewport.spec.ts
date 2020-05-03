/// <reference types="cypress" />

context('[VIEWPORT]', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/')
    })

    it('[VIEWPORT] 1920 X 1080 해상도', () => {
        cy.viewport(1920, 1080)
        cy.get('[id="사진"]').should('be.visible')
        cy.get('[data-test="test-postList"]').should('have.length', 16)

        cy.wait(500)
    })

    it('[VIEWPORT] 1920 X 900 해상도', () => {
        cy.viewport(1920, 900)
        cy.get('[id="사진"]').should('not.be.visible')
        cy.get('[data-test="test-postList"]').should('have.length', 12)
        cy.wait(500)
    })


    it('[VIEWPORT] 1920 X 800 해상도', () => {
        cy.viewport(1920, 800)
        cy.get('[id="사진"]').should('not.be.visible')
        cy.get('[data-test="test-postList"]').should('have.length', 8)
        cy.wait(500)
    })

})
