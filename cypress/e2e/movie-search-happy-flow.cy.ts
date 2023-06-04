describe('Movie search: happy flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the dashboard page to search for a movie', () => {
    cy.url().should('include', '/dashboard');
    cy.get('app-dashboard').should('have.length', 1);
  });

  it('should search a movie and display the results', () => {
    cy.get('app-search-bar').should('have.length', 1);

    cy.get('[data-test="input_search"]').type('Lord of the rings');
    cy.get('[data-test="search_button"]').click();
    cy.get('app-movie-card').should('be.visible');
  });

  it('should search a movie with short plot and display the results', () => {
    cy.get('[data-test="input_search"]').type('Lord of the rings');
    cy.get('[type="radio"]').check('short');

    cy.get('[data-test="search_button"]').click();
    cy.get('app-movie-card').should('be.visible');
  });

  it('should search a series from the list of options', () => {
    cy.get('[data-test="input_search"]').type('Lord of the rings');
    cy.get('select').select('series');

    cy.get('[data-test="search_button"]').click();
    cy.get('app-movie-card').should('be.visible');
  });

  it('should show movie details on clicking the movie card', () => {
    cy.get('[data-test="input_search"]').type('Lord of the rings');
    cy.get('[data-test="search_button"]').click();

    cy.get('app-movie-card').first().click();
    cy.url().should('include', '/movie-detail?movieId=');

    cy.get('.movieDetails').should('be.visible');
    cy.get('.movieDetails_basicInfo').should('be.visible');
    cy.get('.movieDetails__description img').should('be.visible');
    cy.get('[data-test="movie_details_plot"]').should('be.visible');
    cy.get('.movieDetails__description__genre').should('be.visible');
    cy.get('.movieDetails__description__writer').should('be.visible');
    cy.get('[data-test="movie_details_director"]').should('be.visible');
    cy.get('[data-test="movie_details_actors"]').should('be.visible');
    cy.get('[data-test="movie_details_awards"]').should('be.visible');
  });
});
