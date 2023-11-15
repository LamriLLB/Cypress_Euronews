    /// <reference types="Cypress" />

    describe('Business EN', function(){

        before(function(){
            cy.visit('/')
            cy.viewport(1300, 966)
            cy.get('span').contains('Continue without agreeing').click()
        })

        it('Verify Business Verticale', function(){
            cy.get('.list-item__link').contains('Business').click({force: true})
            cy.get('ul li[class="c-menu-main__list__item"]').contains('News').should('be.visible')
            cy.get('ul li[class="c-menu-main__list__item"]').contains('Economy').should('be.visible')
            cy.get('ul li[class="c-menu-main__list__item"]').contains('Markets').should('be.visible')

            cy.get('figure img[class="m-img"]').should('be.visible')

            //Get Title value
            cy.get('article[data-partnered="Partner content"] h1')
              .click()
              .then($value => {
                var textValue = $value.text()
                cy.wrap(textValue).as('wrapValue')
                })

            // Verify Presence Top Stories
            cy.get('#adb-article-top-stories').trigger('mouseover').should('be.visible')
            cy.get('#adb-article-you-might-also-like').trigger('mouseover').should('be.visible')

        })
   

        // it("Check Business Article", function () {

        //     cy.get('h1').contains(this.wrapValue)
        //     //cy.log("===== Title", this.wrapValue)
        // })


    })