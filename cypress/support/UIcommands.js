/// $2
import { cookiesDialogBox, getCredentials, loginButton } from "../support/POM/mainPage"

Cypress.Commands.add('intercepApiRequest', (url, alias) => {
    cy.intercept(url).as(alias)
})

Cypress.Commands.add('assertApiRequest', (alias, expectedStatusCode) => {
    cy.wait(`@${alias}`).then(interception => {
        expect(interception.response.statusCode).eq(expectedStatusCode)
    })
})

Cypress.Commands.add('acceptCookiesDialogBox', () => {
    cookiesDialogBox().then(($el) => {
        if ($el.is(':visible')) {
            cy.wrap($el).click({ force: true });
        }
    });
})

Cypress.Commands.add('preserveAndAssertCookies', () => {
    cy.getCookie('AWSALB').should('exist');
    cy.getCookie('AWSALBCORS').should('exist');
    cy.getCookie('csrf-cookie-token').should('exist');

    cy.preserveCookieOnce("AWSALB", "AWSALBCORS", "csrf-cookie-token");

    cy.getCookie('AWSALB').should('have.property', 'expiry');
    cy.getCookie('AWSALBCORS').should('have.property', 'expiry');
})

Cypress.Commands.add('logInToPage', (email, password) => {
    getCredentials().email.type(email)
    getCredentials().password.type(password)

    cy.acceptCookiesDialogBox()
    loginButton().click()
})

Cypress.Commands.add('acceptWelcomeDialogBox', () => {
    cy.get('.chakra-modal__content-container')
        .find('[type=button]').eq(0).click()
})

Cypress.Commands.add('selectClient', (client) => {
    cy.get('#client_switch').select(client)
})