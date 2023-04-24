import './UIcommands'
import '@testing-library/cypress/add-commands'
import '@shelex/cypress-allure-plugin'
import 'cypress-v10-preserve-cookie'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
