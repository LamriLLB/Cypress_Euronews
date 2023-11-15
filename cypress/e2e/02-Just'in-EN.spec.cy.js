    /// <reference types="Cypress" />

    describe('Just In EN', function(){

        before(function(){
            cy.visit('/')
            cy.viewport(1300, 966)
            cy.get('span').contains('Continue without agreeing').click()
        })

        it('Verify Just in section', function(){
            cy.get('li[class="c-menu-icons"] a[title="Just In"]').click({force: true})
            cy.get('.o-timeline__main').should ('be.visible')

            cy.get('button[aria-label="Load more"]').trigger('mouseover').should('be.visible')
            
        })
   
    })