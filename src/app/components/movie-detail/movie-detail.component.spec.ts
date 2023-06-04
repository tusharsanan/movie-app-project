import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { SearchService } from '../../services/search.service';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;
  let debugElement: DebugElement;
  let searchService: SearchService;
  let getPlotTypeSpy: any;
  let searchMovieByIdSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MovieDetailComponent,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    });
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    debugElement = fixture.debugElement;

    searchService = debugElement.injector.get(SearchService);

    getPlotTypeSpy = spyOn(searchService, 'getPlotType').and.callThrough();
    searchMovieByIdSpy = spyOn(
      searchService,
      'searchMovieById'
    ).and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the movie details by id on page load', () => {
    component.ngOnInit();
    component.movieId = '123';

    fixture.detectChanges();

    expect(getPlotTypeSpy).toHaveBeenCalled();
    expect(searchMovieByIdSpy).toHaveBeenCalled();
  });
});
