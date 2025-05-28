it('Debug cookie banner', () => {
  cy.visit('https://r0892196-realbeans.myshopify.com')
  cy.get('input[type="password"]').type('bowmoh')
  cy.get('button[type="submit"]').click()
  cy.wait(2000)
  
  // Log de HTML van de hele pagina om te zien wat er is
  cy.document().then((doc) => {
    cy.log('Page HTML:')
    cy.log(doc.body.innerHTML)
  })
  
  // Neem een screenshot
  cy.screenshot('after-password-entry')
  
  // Probeer verschillende mogelijke selectors voor cookie banners
  cy.log('Checking for cookie banner selectors')
  
  // Lijst van mogelijke selectors voor Shopify cookie banners
  const possibleSelectors = [
    '[data-cookie-banner]',
    '#shopify-privacy-banner',
    '.cookie-banner',
    '[data-cc-banner]',
    '.cc-banner',
    '#cookies-banner',
    '.privacy-banner',
    '[aria-label*="cookie"]',
    '[class*="cookie"]',
    '[id*="cookie"]'
  ]
  
  // Controleer elk van deze selectors en log het resultaat
  possibleSelectors.forEach(selector => {
    cy.get('body').then($body => {
      const elements = $body.find(selector)
      cy.log(`Selector "${selector}": ${elements.length} elements found`)
      if (elements.length > 0) {
        cy.log(`HTML of "${selector}":`)
        cy.log(elements.html())
      }
    })
  })
})
