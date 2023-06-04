import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../services/search.service';
import { FEATURED_MOVIES_IDS } from '../../constants/movie-app.constants';
import { catchError, forkJoin, Observable, of } from 'rxjs';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent implements OnInit {
  constructor(private _searchService: SearchService) {}

  public featuredMovies$!: Observable<any>;

  ngOnInit(): void {
    const featuredMoviesDataSource = FEATURED_MOVIES_IDS.map(
      (featuredId: string) =>
        this._searchService
          .searchMovieById(featuredId)
          .pipe(
            catchError((e) => of('An error occurred while fetching the movie!'))
          )
    );

    this.featuredMovies$ = forkJoin([...featuredMoviesDataSource]);
  }
}
