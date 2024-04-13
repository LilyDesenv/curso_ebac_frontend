/// <reference types="cypress" />

describe('Teste para a home', () =>{
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar 3 contatos', () => { 
        cy.get('.sc-beqWaB').should('have.length', 3)
    })

    it('Deve Adicionar 1 contato' ,() => {
        cy.get('input[type="text"]').type('Meu nome')
        cy.get('input[type="email"]').type('meuemail@mail')
        cy.get('input[type="tel"]').type('61 9999-9999')
        cy.get('.adicionar').click()

        cy.get('.sc-beqWaB').should('have.length', 4)
    })

    it('Deve Editar um contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('Gian Souza')
        cy.get('input[type="email"]').clear()
        cy.get('input[type="email"]').type('gian@ebac.com.br')
        cy.get('input[type="tel"]').clear()
        cy.get('input[type="tel"]').type('11 91234-5678')
        cy.get('button[type="submit"]').click()
        
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('have.text','Gian Souza')
    })

    it('Deve Cancelar a edição de um contato', () => {
        cy.get('.edit').first().click()
        cy.get('.cancelar').click()

        cy.get('.adicionar').should('have.text','Adicionar')
    })

    it('Deve excluir um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        cy.get('.sc-beqWaB').should('have.length', 3)
    })
})