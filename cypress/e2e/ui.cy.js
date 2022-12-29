describe(' Basic UI tests', () => {

  it('Visit hub88.io and navigate to /suppliers', () => {
    cy.visit('/')
    //Visits baseUrl hub88.io
    cy.contains('Suppliers').click({force: true})
    // Finds "Suppliers" and clicks it
    cy.url().should('include', 'suppliers')
    // Assert that the new page has "wrapper" in the URL
  })

  it('Visit suppliers, make a search and visit the first result', () => {
    cy.visit('/suppliers')
    //Visits baseUrl hub88.io
    cy.get('.input').type('Relax')
    //find the input field and type in "Relax"
    cy.get('.supplier-card').first().click({force: true})
    // Get the first supplier card and click on it
    cy.url().should('include', 'Relax+Gaming')
    // Confirm new URL contains relax gaming
  })

  it('Visit suppliers, make a search and visit the first result', () => {
    cy.visit('/suppliers')
    //Visits baseUrl hub88.io
    cy.get('.input').type('One')
    //find the input field and type in "Relax"
    cy.get('.supplier-card').first().click({force: true})
    // Get the first supplier card and click on it
    cy.url().should('include', 'OneTouch')
    // Confirm new URL contains relax gaming
    cy.contains('Steam Vault').click()
    //Find specific game called "Steam Vault" and open it
  })

})