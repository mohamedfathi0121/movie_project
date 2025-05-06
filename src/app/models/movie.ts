export interface Movie {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    original_language: string;
    original_title: string;
    backdrop_path: string;
    adult: boolean;
    video: boolean;
  }