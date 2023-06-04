import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { SearchService } from '../../services/search.service';

import { untilDestroyed } from '../../utils/common.utils';
import { Observable } from 'rxjs';
import { IMovie } from '../../models/movie-details.model';
import { StringToArrayPipe } from '../../pipes/string-to-array.pipe';
import { ShowCharactersPipe } from '../../pipes/show-characters.pipe';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, StringToArrayPipe, ShowCharactersPipe],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private _searchService: SearchService
  ) {}

  private untilDestroyed = untilDestroyed();

  movieDetails$!: Observable<IMovie>;

  public movieId: string = '';
  public plotType: string = '';
  public togglePipe: boolean = true;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params) => (this.movieId = params['movieId'])
    );

    this.getMovieDetailsById();
  }

  public getMovieDetailsById(): void {
    this._searchService
      .getPlotType()
      .pipe(this.untilDestroyed())
      .subscribe(
        (plot) => (this.plotType = plot),
        (error) =>
          console.log('Error occurred in fetching the movie details', error)
      );

    this.movieDetails$ = this._searchService.searchMovieById(
      this.movieId,
      this.plotType
    );
  }
}
