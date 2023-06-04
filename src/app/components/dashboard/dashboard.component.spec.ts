import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { SearchService } from '../../services/search.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let debugElement: DebugElement;
  let searchService: SearchService;
  let searchServiceSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DashboardComponent, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;

    searchService = debugElement.injector.get(SearchService);

    searchServiceSpy = spyOn(
      searchService,
      'onSearchResults'
    ).and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the onSearchResults method of the service to fetch the list of movies', () => {
    component.ngOnInit();
    expect(searchServiceSpy).toHaveBeenCalled();
  });
});
