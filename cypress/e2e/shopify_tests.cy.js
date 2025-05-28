describe('Shopify Store Tests', () => {
  beforeEach(() => {
    // Visit your store URL
    cy.visit('https://r0892196-realbeans.myshopify.com')
    
    // Handle password page
    cy.get('input[type="password"]').type('bowmoh')
    cy.get('button[type="submit"]').click()
    
    // Wait for page to load after password entry
    cy.wait(2000)
  })
  
  
})
