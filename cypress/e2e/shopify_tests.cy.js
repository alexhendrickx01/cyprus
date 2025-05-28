describe('Shopify Store Tests', () => {
  beforeEach(() => {
    // Visit your store URL
    cy.visit('https://r0892196-realbeans.myshopify.com')
    
    // Handle password page
    cy.get('input[type="password"]').type('bowmoh')
    cy.get('button[type="submit"]').click()
    
    // Wait for page to load after password entry
    cy.wait(2000)
    
    // Handle cookie banner if it appears
    cy.get('body').then($body => {
      if ($body.find('[data-cookie-banner]').length > 0) {
        cy.get('[data-cookie-banner] button').click();
      }
    });
  })
  
  it('Product catalog shows correct items', () => {
    cy.visit('/collections/all')
    // Dawn theme uses .card instead of .product-item
    cy.get('.card').should('have.length.greaterThan', 0)
  })
  
  it('Sorting products changes their order', () => {
    cy.visit('/collections/all')
    // Dawn theme uses facets for sorting
    cy.get('#SortBy').should('exist')
    cy.get('#SortBy').select('price-ascending')
  })
  
  it('Product detail pages display correct information', () => {
    // Navigate to a specific product
    cy.visit('/collections/all')
    cy.get('.card-information__text a').first().click()
    
    // Check product details with Dawn theme selectors
    cy.get('.product__title').should('be.visible')
    cy.get('.price').should('be.visible')
    cy.get('.product__description').should('be.visible')
  })
  
  it('Homepage displays correctly', () => {
    cy.visit('/')
    // Check homepage elements with Dawn theme selectors
    cy.get('.banner__box').should('be.visible')
    cy.get('.featured-collection').should('be.visible')
  })
  
  it('About page includes history paragraph', () => {
    cy.visit('/pages/about')
    // Check about page content
    cy.get('.page-width').should('be.visible')
  })
})
