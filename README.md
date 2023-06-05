# MovieApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

The movie app provides functionalities for searching a movie (movie, series, episode) by title, viewing featured movies and looking at a particular movie details. It is a fully accessible and responsive website made with Angular and TypeScript. The E2E tests are covered with Cypress.


Summary:`

1) Dashboard page which includes a searchbar to search for a movie by title.
2) A customer can select a list of additional options from the dashboard page while searching for a movie by title. These include searching a movie by type (movie, episode, series, all) and the plot type (full, short).
3) A list of movie results are displayed on the dashboard page if the search string yields results. These movie results contain basic information of the movie (name, poster, year).
4) An error will be displayed on the dashboard page for certain conditions (e.g., movie not found, movie name blank, too many results etc.)
5) On click of a particular search result movie in the dashboard page, the details of the particular movie are displayed. The particular details include: Title, year, rating, duration, plot (full or short), Genre, Director, Poster, Date of release Writer, Actor and awards. The Genre, Writers and Actors are displayed as a list using Custom Angular Pipe 
6) If the plot type is selected as full while searching for a movie and the number of characters in the plot > 200, the movie detail page will truncate the plot after 200 characters by providing "Show more" and "Show less" toggle to read the full plot. 
7) A featured page in which 2 predefined movies are loaded. On click of those movies, the details of the movies (as stated above) are displayed.
8) The page is responsive.
9) The page is accessible (basic).
10) Unit tests using Karma and Jasmine
11) E2E tests using Cypress

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm runcypress:open` to execute the end-to-end tests via Cypress.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
