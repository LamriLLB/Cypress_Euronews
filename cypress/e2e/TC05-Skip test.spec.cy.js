    /// <reference types="Cypress" />

    describe('Login Account EN', function(){

        before(function(){
            cy.visit('/')
            cy.viewport(1300, 966)
            cy.get('span').contains('Continue without agreeing').click()
        })

        it.skip('Login to my account', function(){
            cy.get('ul[class="o-header-topbar__internal-links"] a[title="Log In"]').click({force: true})
        
        })
   
    })