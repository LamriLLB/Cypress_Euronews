    /// <reference types="Cypress" />

    describe('Login Account EN', function(){

        before(function(){
            cy.visit('/')
            cy.viewport(1300, 966)
            cy.get('span').contains('Continue without agreeing').click()
        })

        it('Login to my account', function(){
            cy.get('ul[class="o-header-topbar__internal-links"] a[title="Log In"]').click({force: true})
            
            cy.get('form[id="gigya-login-form"] input[name="username"]').type('lam.llb@yopmail.com')
            cy.get('form[id="gigya-login-form"] input[name="password"]').type('Test-1234')
            cy.get('form[id="gigya-login-form"]').submit()

            cy.get('span').contains('My Profile').click({force: true})
            cy.get('span').contains('My Newsletters').click({force: true})
            cy.get('span').contains('Contact').trigger('mouseover')
            cy.get('span').contains('Settings').click({force: true})
        })
   

        after(function(){
            cy.wait(2000)
            cy.get('span').contains('Log Out').click()

        })
    })