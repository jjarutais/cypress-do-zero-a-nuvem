Cypress.Commands.add('fillMandatoryFieldsAndSubmit', userOnlyMandatoryFields => {
    cy.clock()

    cy.get('#firstName').type(userOnlyMandatoryFields.firstName)
    cy.get('#lastName').type(userOnlyMandatoryFields.lastName)
    cy.get('#email').type(userOnlyMandatoryFields.email)
    cy.get('#open-text-area').type(userOnlyMandatoryFields.textAreaMessage, { delay: 0})
    cy.get('button[type="submit"]').click()

    cy.tick(3000)
})