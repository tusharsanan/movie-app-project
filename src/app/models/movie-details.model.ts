export interface IMovie {
  Actors?: string;
  Awards?: string;
  BoxOffice?: string;
  Country?: string;
  Director?: string;
  DVD?: string;
  Genre?: string;
  imdbID?: string;
  imdbRating?: string;
  imdbVotes?: string;
  Language?: string;
  Metascore?: string;
  Plot?: string;
  Poster?: string;
  Rated?: string;
  Ratings?: {
    Source: string;
    Value: string;
  }[];
  Released?: string;
  Response: string;
  Runtime?: string;
  Title?: string;
  Type?: string;
  Website?: string;
  Writer?: string;
  Year?: string;
  Error?: string;
}

export interface IMovieSearchResults {
  Response: string;
  Search?: IMovie[];
  totalResults?: string;
  Error?: string;
}
