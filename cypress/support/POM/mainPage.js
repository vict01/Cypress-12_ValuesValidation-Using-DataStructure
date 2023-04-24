export function cookiesDialogBox() {
    return cy.get('.osano-cm-accept-all')
}

export function getCredentials() {
    const email = cy.get('#email')
    const password = cy.get('#password')
    return { email, password }
}

export function loginButton() {
    return cy.get('.btn-primary')
}