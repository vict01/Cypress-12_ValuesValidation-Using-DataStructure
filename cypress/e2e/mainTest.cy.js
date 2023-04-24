/// <reference types="Cypress" />
import { appData, userData } from "../fixtures/fixtures.json"

describe('Business Critical UI Scenario', () => {
    const urlDatev = Cypress.config().baseUrl+ 'datev_settings.php'

    before(() => {
        cy.visit('/')
    })

    beforeEach(() => {
        cy.logInToPage(userData.email, userData.password)        
        cy.preserveAndAssertCookies()
    })

    it('UI Happy Path | Validate input values', () => {
        cy.acceptWelcomeDialogBox()
        cy.selectClient(appData.client)
        cy.visit(urlDatev)

        cy.fixture('dataSource.json').then((jsonFile) => {
            cy.get('input[type="text"]').should('exist').then((inputs) => {
                inputs.each((index, element) => {
                    if (element.value !== "") {
                        let inputValue = Number(element.value)
                        expect(Object.values(jsonFile)).to.include(inputValue);
                    }
                });
            });
        });

    });

})