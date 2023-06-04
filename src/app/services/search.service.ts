import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { API_KEY, GET_MOVIES_BASE_URL } from '../constants/movie-app.constants';
import { IMovie, IMovieSearchResults } from '../models/movie-details.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private _http: HttpClient) {}

  public movieSearchResults$ = new BehaviorSubject<IMovieSearchResults>({
    Response: '',
    Search: [],
    totalResults: '',
  });

  public plotType = new BehaviorSubject<string>('full');

  onSearchResults(): Observable<IMovieSearchResults> {
    return this.movieSearchResults$.asObservable();
  }

  getPlotType(): Observable<string> {
    return this.plotType.asObservable();
  }

  search(value: string, movieType: string): Observable<IMovieSearchResults> {
    const url = `${GET_MOVIES_BASE_URL}?apikey=${API_KEY}&s=${value}&type=${movieType}`;

    return this._http.get<IMovieSearchResults>(url);
  }

  searchMovieById(
    movieId: string,
    plotType: string = 'full'
  ): Observable<IMovie> {
    return this._http.get<IMovie>(
      `${GET_MOVIES_BASE_URL}?apikey=${API_KEY}&i=${movieId}&plot=${plotType}`
    );
  }
}
