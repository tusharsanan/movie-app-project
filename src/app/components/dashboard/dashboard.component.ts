import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieCardComponent } from '../movie-card/movie-card.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

import { SearchService } from '../../services/search.service';

import { Observable } from 'rxjs';
import { IMovieSearchResults } from '../../models/movie-details.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, MovieCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private _searchService: SearchService) {}

  public movieSearchDetails$!: Observable<IMovieSearchResults>;

  ngOnInit() {
    // Reset the behaviorSubject on init every time the route changes
    this._searchService.movieSearchResults$.next({
      Response: '',
      Search: [],
      totalResults: '',
      Error: undefined,
    });

    this.movieSearchDetails$ = this._searchService.onSearchResults();
  }
}
