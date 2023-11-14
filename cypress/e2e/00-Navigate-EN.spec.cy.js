    /// <reference types="Cypress" />
    describe('Navigation EN', function(){

        beforeEach(function(){
            cy.visit('/')
            cy.viewport(1300, 966)
            cy.get('span').contains('Continue without agreeing').click()
        })

        it('Test Menu Header (Non Verticale)', function(){
            //My Europe
            cy.get('.list-item__link').contains('My Europe').click({force: true})
            cy.get('img[alt="my.europe"]').should('be.visible')

            //World
            cy.get('.list-item__link').contains('World').click({force: true})
            cy.get('h1').contains("World").should('be.visible')

            //Sport
            cy.get('.list-item__link').contains('Sport').click({force: true})
            cy.get('h1').contains("Sport").should('be.visible')

        })

        it('Test Menu Header (Verticale', function(){
            //Business
            cy.get('.list-item__link').contains('Business').click({force: true})
            cy.get('header svg[aria-label="business"]').should('be.visible')
            cy.get('header svg[aria-label="euronews"]').click()

            //Green
            cy.get('.list-item__link').contains('Green').click({force: true})
            cy.get('header svg[aria-label="green"]').should('be.visible')
            cy.get('header svg[aria-label="euronews"]').click()

            //Next
            cy.get('.list-item__link').contains('Next').click({force: true})
            cy.get('header .c-logo__svg--next').should('be.visible')
            cy.get('header svg[aria-label="euronews"]').click()

            //Travel
            cy.get('.list-item__link').contains('Travel').click({force: true})
            cy.get('header svg[aria-label="travel"]').should('be.visible')
            cy.get('header svg[aria-label="euronews"]').click()

            //Culture
            cy.get('.list-item__link').contains('Culture').click({force: true})
            cy.get('header svg[aria-label="culture"]').should('be.visible')
            cy.get('header svg[aria-label="euronews"]').click()

            //Video
            cy.get('.list-item__link').contains('Video').click({force: true})
            cy.get('h1').contains("Video").should('be.visible')
            cy.get('a[aria-label="Euronews Logo"]').click()

        })
     
    })