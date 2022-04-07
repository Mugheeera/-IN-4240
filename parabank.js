beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')


    cy.get('.login .button')
      .click()

    cy.get('.error')
      .should('have.text', 'Please enter a username and password.')

    cy.get('.login [name = "username"]')
      .type('Tarar0900')
      .should('have.value', 'Tarar0900')
      
    cy.get('.login [name = "password"]')
      .type('Tarar0900')
      .should('have.value', 'Tarar0900')

    cy.get('.login .button')
      .click()
  })
  
afterEach(() => {
    cy.get('#leftPanel li')
          .last()
          .click()
  })

describe('Transfer Funds', () => {
    it('It tests the Transfer Funds page', () => {
        cy.get('#leftPanel li')
          .eq(2)
          .click()

        cy.get('#fromAccountId')
          .select(0)
        
        cy.get('[id = "toAccountId"]')
          .select(1)

        cy.contains('.button', 'Transfer').click()
        cy.wait(150)
        
        cy.get('.error')
          .should('have.text', 'The amount cannot be empty. ')

        cy.get("#amount")
          .type('120')
          .should('have.value', '120')

        cy.get('#fromAccountId')
          .select(0)
        
        cy.get('[id = "toAccountId"]')
          .select(1)

        cy.get('input')
          .contains('Transfer')
          .click()
        
        cy.get('.title')
          .should('have.text', 'Transfer Complete!')

    })
})

describe('Bill Pay', () => {
    it('It tests the Bill pay page', () => {
        cy.get('#leftPanel li')
          .eq(3)
          .click()

        cy.contains('.button', 'Send Payment')
          .click()

        cy.get('.error')
          .should('have.text', 'Payee name is required.Address is required.City is required.State is required.Zip Code is required.Phone number is required.Account number is required.Please enter a valid number.Account number is required.Please enter a valid number.The account numbers do not match.The amount cannot be empty. Please enter a valid amount.An internal error has occurred and has been logged.')

        cy.get('[name = "payee.name"]')
          .type('Will Smith')
          .should('have.value', 'Will Smith')

        cy.get('[name = "payee.address.street"]')
          .type('The Hollywood Boulevard')
          .should('have.value', 'The Hollywood Boulevard')

        cy.get('[name = "payee.address.city"]')
          .type('Los Angeles')
          .should('have.value', 'Los Angeles')
        
        cy.get('[name = "payee.address.state"]')
          .type('California')
          .should('have.value', 'California')
        
        cy.get('[name = "payee.address.zipCode"]')
          .type('0900')
          .should('have.value', '0900')
        
        cy.get('[name = "payee.phoneNumber"]')
          .type('090078601')
          .should('have.value', '090078601')

        
        cy.get('[name = "amount"]')
          .type('100')
          .should('have.value', '100')


        cy.wait(20)  

        cy.get('[name = "payee.accountNumber"]')
          .type('1234567890')
          .should('have.value', '1234567890')

        cy.get('[name = "verifyAccount"]')
          .type('1234567890')
          .should('have.value', '1234567890')


        cy.get('.button')
          .contains("Send Payment")
          .click()     
          
        cy.get('[ng-show = "showResult"] .title')
          .should('have.text','Bill Payment Complete')
    })
})

describe('Find Transactions', () => {
    it('It tests the Find Transactions page', () => {
        cy.get('#leftPanel li')
          .eq(4)
          .click()

        cy.get('.button').eq(1).click()

        cy.get('#accountId')
          .select('16674')
          .should('have.value', '16674')

        cy.get('[id = "criteria.transactionId"]')
          .type('23800')
        
        cy.get('.button').eq(1).click()
        cy.wait(150)
        
        cy.get('#leftPanel li')
          .eq(4)
          .click()

        cy.get('[id = "criteria.onDate"]')
          .type('04-07-2022')

        cy.get('.button').eq(2).click()



        cy.wait(150)
        cy.get('#leftPanel li')
          .eq(4)
          .click()
      

        cy.get('[id="criteria.fromDate"]')
          .type('03-06-2022')

        cy.get('[id="criteria.toDate"]')
          .type('04-07-2022')
    
        cy.get('.button').eq(3).click()

        cy.wait(150)
        cy.get('#leftPanel li')
        .eq(4)
        .click()

        cy.get('[id="criteria.amount"]')
          .type('150')
        
        cy.get('.button').eq(4).click()
    })
})