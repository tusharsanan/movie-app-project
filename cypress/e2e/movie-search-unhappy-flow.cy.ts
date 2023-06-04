describe('Movie search: unhappy flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the dashboard page to search for a movie', () => {
    cy.url().should('include', '/dashboard');
    cy.get('app-dashboard').should('have.length', 1);
  });

  it('should display an error message if the search string has too many results', () => {
    cy.get('[data-test="input_search"]').type('A');

    cy.get('[data-test="search_button"]').click();
    cy.get('.error-notification').should('be.visible');
    cy.get('.error-notification').contains('Error: Too many results.');
  });

  it('should display an error message if the search string did not find any results', () => {
    cy.get('[data-test="input_search"]').type('VK18');

    cy.get('[data-test="search_button"]').click();
    cy.get('.error-notification').should('be.visible');
    cy.get('.error-notification').contains('Error: Movie not found!');
  });

  it('should display an error message if the search string was empty', () => {
    cy.get('[data-test="search_button"]').click();
    cy.get('.error-notification').should('be.visible');
    cy.get('.error-notification').contains('Error: Movie name is required.');
  });
});
