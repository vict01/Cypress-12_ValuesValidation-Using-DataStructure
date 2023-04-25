/// <reference types="Cypress" />
import { appData, userData } from "../fixtures/fixtures.json"

describe('Business Critical UI Scenario', () => {
    const urlDatev = Cypress.config().baseUrl + 'datev_settings.php'

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

describe('Business Critical data Scenario', () => {
    const dataPath = 'cypress/support/data/';
    it('Validate values in file 1 are contained in file2', () => {
        cy.readFile(dataPath+'file1.json').then(file1 => {
            cy.readFile(dataPath+'file2.json').then(file2 => {

                const values1 = file1.values;
                const values2 = file2.values;

                expect(values1.every(val => values2.includes(val))).to.be.true;
            });
        });
    });
})