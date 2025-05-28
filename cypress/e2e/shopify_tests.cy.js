describe('Shopify Store Tests', () => {
  beforeEach(() => {
    // Visit your store URL
    cy.visit('https://r0892196-realbeans.myshopify.com')
    
    // Handle password page
    cy.get('input[type="password"]').type('bowmoh')
    cy.get('button[type="submit"]').click()
    
    // Wait for page to load after password entry
    cy.wait(2000)


    cy.get('[aria-label="Cookie Banner"], .cookie-banner, #cookie-banner, .privacy-banner', { timeout: 10000 })
      .then($banner => {
        if ($banner.length > 0) {
          // Look for the accept button within the banner
          cy.wrap($banner)
            .find('button, .accept-button, [aria-label="Accept"], [data-action="accept-cookies"]')
            .first()
            .click();
          
          // Wait for the banner to disappear
          cy.wait(1000);
        }
      });
  })
  
  it('Product catalog shows correct items', () => {
    cy.visit('/collections/all')
    // Add assertions to check products
    cy.get('.product-item').should('have.length.greaterThan', 0)
  })
  
  it('Sorting products changes their order', () => {
    cy.visit('/collections/all')
    // Test sorting functionality
    cy.get('select.sort-by').select('price-ascending')
    // Add assertions to verify sorting
  })
  
  it('Product detail pages display correct information', () => {
    // Navigate to a specific product
    cy.visit('/collections/all')
    cy.get('.product-item a').first().click()
    
    // Check product details
    cy.get('.product-title').should('be.visible')
    cy.get('.price').should('be.visible')
    cy.get('.product-description').should('be.visible')
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
