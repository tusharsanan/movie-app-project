import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { untilDestroyed } from '../../utils/common.utils';
import { IMovieSearchResults } from '../../models/movie-details.model';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  constructor(
    private formBuilder: FormBuilder,
    private _searchService: SearchService
  ) {}

  private untilDestroyed = untilDestroyed();

  public submitted = false;

  get movieNameControl() {
    return this.searchForm.get('movieName');
  }

  public changePlot(event: Event): void {
    const plotType = (event.target as HTMLInputElement).value;

    this._searchService.plotType.next(plotType);
  }

  searchForm = this.formBuilder.group({
    movieName: ['', Validators.required],
    movieType: ['movie'],
    moviePlot: ['full'],
  });

  public searchMovieByTitle(movie: string, movieType: string): void {
    this.submitted = true;

    if (!this.searchForm.valid) {
      return;
    }

    this._searchService
      .search(movie, movieType)
      .pipe(this.untilDestroyed())
      .subscribe(
        (response: IMovieSearchResults) =>
          this._searchService.movieSearchResults$.next(response),
        (error) => console.log('Error occurred in searching for movies', error)
      );

    this.submitted = false;
  }
}
