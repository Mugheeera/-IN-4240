describe('Customer Care Page', () => {
    it('Tests the customer care page', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')

      cy.contains('contact').click()

      cy.get('.button')
        .contains('Send to Customer Care')
        .click() 
      
      cy.get('.error').should('have.text', 'Name is required.Email is required.Phone is required.Message is required.')

      cy.get('#name')
        .type('John Doe')
        .should('have.value', 'John Doe')

      cy.get('#email')
        .type('JohnDoe@gmail.com')
        .should('have.value', 'JohnDoe@gmail.com')
      
      cy.get('#phone')
        .type('090078601')
        .should('have.value', '090078601')

      cy.get('#message')
        .type('Cannot login to my account')
        .should('have.value', 'Cannot login to my account') 
        
      cy.get('.button')
        .contains('Send to Customer Care')
        .click() 
        

      
    })
  })