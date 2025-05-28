describe('Shopify Store Tests', () => {
  it('can access password-protected store', () => {
    // Visit your store URL
    cy.visit('https://r0892196-realbeans.myshopify.com/')
    
    // Find the password input field and type the store password
    cy.get('input[type="password"]').type('bowmoh')
    
    // Click the submit/enter button
    cy.get('button[type="submit"]').click()
    
    // Verify we got past the password page (check for an element that exists on your store homepage)
    cy.get('.header__heading-link').should('exist')
    // Or any other element that confirms you're on the actual store page
  })
})
