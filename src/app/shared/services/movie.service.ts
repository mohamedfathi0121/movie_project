import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import { Movie } from '../../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey =
    '7906db679229c246149e72a36a5f6fd4';
  private baseUrl = 'https://api.themoviedb.org/3/movie';

  constructor(private http: HttpClient) {}

  getMovieById(id: number): Observable<Movie> {
    const url = `${this.baseUrl}/${id}`;
    const params = new HttpParams().set('Authorization', this.apiKey);

    return this.http.get<Movie>(url, { params });
  }

  getMoviesByCategory(
    category: 'now_playing' | 'popular' | 'top_rated' | 'upcoming',
    limit?: number
  ): Observable<Movie[]> {
    const url = `${this.baseUrl}/${category}`;
    const params = new HttpParams().set('api_key', this.apiKey);

    const maxPerPage = 20;

    if (limit && limit <= maxPerPage) {
      return this.http.get<any>(url, { params }).pipe(
        map(res => res.results.slice(0, limit))
      );
    }

    if (!limit) {
      return this.http.get<any>(url, { params }).pipe(
        map(res => res.results) // Page 1
      );
    }

    const pagesNeeded = Math.ceil(limit / maxPerPage);
    const requests = [];

    for (let page = 1; page <= pagesNeeded; page++) {
      requests.push(
        this.http.get<any>(url, {
          params: params.set('page', page)
        })
      );
    }

    return forkJoin(requests).pipe(
      map(responses =>
        responses
          .flatMap(res => res.results)
          .slice(0, limit)
      )
    );
  }
  
}
