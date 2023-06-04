import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    title: 'Dashboard',
  },
  {
    path: 'movie-detail',
    loadComponent: () =>
      import('./components/movie-detail/movie-detail.component').then(
        (m) => m.MovieDetailComponent
      ),
    title: 'Movie detail',
  },
  {
    path: 'featured',
    loadComponent: () =>
      import('./components/featured/featured.component').then(
        (m) => m.FeaturedComponent
      ),
    title: 'Featured movies',
  },
];
