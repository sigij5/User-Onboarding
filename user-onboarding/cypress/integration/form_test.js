describe('Test Inputs and Buttons', () => {
    it('can visit the site', () => {
        cy.visit('http://localhost:3000')
    })


    it('can get the name input and type a name in it', () => {
        cy.get('input[name=name]')
            .type('mark')
            .should('have.value', 'mark')
        
    })

    it('can get the email input and type new email', () => {
        cy.get('input[name=email]')
            .type('mark@mark.com')
            .should('have.value', 'mark@mark.com')
    })

    it('can get the password input and type new password', () => {
        cy.get('input[name=password]')
            .type('password')
            .should('have.value', 'password')
    })

    it('can check the terms of service box', () => {
        cy.get('input[name=terms]')
            .check()
            .should('have.value', 'true')
    })

    it('can submit the form data', () =>{
        cy.get('button#submitBtn')
        .should('not.be.disabled')
        .click()
    })

    it('can check for validation', () =>{
        cy.get('input[name=email]')
            .type('abcd')
            .should('have.value', 'abcd')
        cy.get('p#email-error')
            .should('contain', 'Must be a valid email address')
     })
})