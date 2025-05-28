describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://r0892196-realbeans.myshopify.com/')
  })
})


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

  
  it('Homepage displays correctly', () => {
    cy.visit('/')
    // Check homepage elements
    cy.get('.hero').should('be.visible')
    cy.get('.featured-collection').should('be.visible')
  })
  
  it('About page includes history paragraph', () => {
    cy.visit('/pages/about')
    // Check about page content
    cy.get('.page-content').should('contain', 'history')
  })
})
