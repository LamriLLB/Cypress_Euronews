    /// <reference types="Cypress" />

    describe('Login Functionality', function(){

        it('Login test using COnduit', function(){
            cy.visit('/')
            cy.get('a[href="#login"]').click()
            cy.get('input[placeholder="Email"]').type('cypressdemo@gmail.com')
            cy.get('input[placeholder="Password"]').type('cypressdemo')
            cy.get('form').submit()  // or button[type='submit']
            cy.get('a[href="#settings"]').click()
            cy.get('button').contains('Or click here to logout.').click()
        })
    })