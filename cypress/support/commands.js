Cypress.Commands.add('fillMandatoryFieldsAndSubmit', userOnlyMandatoryFields => {
    cy.get('#firstName').type(userOnlyMandatoryFields.firstName)
    cy.get('#lastName').type(userOnlyMandatoryFields.lastName)
    cy.get('#email').type(userOnlyMandatoryFields.email)
    cy.get('#open-text-area').type(userOnlyMandatoryFields.textAreaMessage)
    cy.get('button[type="submit"]').click()
})