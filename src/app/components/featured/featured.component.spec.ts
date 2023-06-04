import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { FeaturedComponent } from './featured.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchService } from '../../services/search.service';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';

describe('FeaturedComponent', () => {
  let component: FeaturedComponent;
  let fixture: ComponentFixture<FeaturedComponent>;
  let debugElement: DebugElement;
  let searchService: SearchService;
  let searchServiceSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FeaturedComponent, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(FeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;

    searchService = debugElement.injector.get(SearchService);

    searchServiceSpy = spyOn(
      searchService,
      'searchMovieById'
    ).and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get an observable of predefined movies using the movieId', fakeAsync(() => {
    component.ngOnInit();

    expect(searchServiceSpy).toHaveBeenCalled();
  }));
});
