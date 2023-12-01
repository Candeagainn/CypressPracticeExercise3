

describe('Login into a page', () => {
    beforeEach(()=>{

        cy.visit('/sampleapp')
    })


    it('Log in with credentials', () =>{
        const userName = "Candela"
        const password = "pwd"
        cy.get('[placeholder = "User Name"]')
        .type(userName)
        .should('have.value', 'Candela')

        cy.get('[name = "Password"]')
        .type(password)

        cy.get('#login')
        .click()
        .get('.text-success')
        .should('contain', 'Candela')

    })

    it('Otro escenario', ()=>{

    })


    
})