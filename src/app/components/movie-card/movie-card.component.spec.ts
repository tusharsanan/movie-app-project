import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MovieCardComponent, RouterTestingModule],
    });
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the movie card if there is no error', () => {
    component.movie = {
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjcwYmExZTEtNzNmZS00OGQ5LThiMjctOGMzYzVkZjY5ODA0XkEyXkFqcGdeQXVyMTU2NTcxNDg@._V1_SX300.jpg',
      Title: 'Beta Test',
      Type: 'movie',
      Year: '2016',
      imdbID: 'tt4244162',
      Response: 'true',
    };

    const compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();

    expect(compiled.querySelector('.movie-card')).not.toBeNull();
  });

  it('should not display the movie card if there is error', () => {
    component.movie = {
      Error: 'Movie not found!',
      Response: 'False',
    };

    const compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();

    expect(compiled.querySelector('.movie-card')).toBeNull();
  });
});
