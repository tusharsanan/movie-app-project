import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { FormBuilder } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovieSearchComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let debugElement: DebugElement;
  let searchService: SearchService;
  let searchServiceSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchBarComponent, HttpClientTestingModule],
      providers: [FormBuilder],
    });
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;

    searchService = debugElement.injector.get(SearchService);

    searchServiceSpy = spyOn(searchService, 'search').and.callThrough();
  });

  function updateForm(movieName: string, movieType: string, moviePlot: string) {
    component.searchForm.controls['movieName'].setValue(movieName);
    component.searchForm.controls['movieType'].setValue(movieType);
    component.searchForm.controls['moviePlot'].setValue(moviePlot);
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form value should update from form changes', fakeAsync(() => {
    updateForm('Lord of the rings', 'series', 'short');

    expect(component.searchForm.value).toEqual({
      movieName: 'Lord of the rings',
      movieType: 'series',
      moviePlot: 'short',
    });
  }));

  it('form should be invalid if the movie name is left empty and form is submitted', fakeAsync(() => {
    updateForm('', 'series', 'short');

    expect(component.searchForm.valid).toEqual(false);
  }));

  it('should not call the search service to search for a movie if no movie name is provided on submit', fakeAsync(() => {
    updateForm('', 'series', 'short');
    component.searchMovieByTitle('', 'series');
    expect(searchServiceSpy).not.toHaveBeenCalled();
  }));

  it('should call the search service to search for a movie if a valid movie name is provided on submit', fakeAsync(() => {
    updateForm('LOTR', 'series', 'short');
    component.searchMovieByTitle('LOTR', 'series');
    expect(searchServiceSpy).toHaveBeenCalled();
  }));

  it('form should have the required error if movie name is not provided', fakeAsync(() => {
    updateForm('', 'series', 'short');
    component.searchMovieByTitle('', 'series');

    const control = component.searchForm.get('movieName');
    expect(control?.hasError('required')).toBeTruthy();
  }));

  it('should display an error if the movie name is left empty and form is submitted', () => {
    updateForm('', 'series', 'short');
    component.submitted = true;

    component.searchMovieByTitle('', 'series');
    const compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();

    expect(
      compiled.querySelector('.error-notification')?.textContent
    ).toContain('Movie name is required');
  });
});
