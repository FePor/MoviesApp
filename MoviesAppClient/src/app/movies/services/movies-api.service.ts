import { Injectable } from '@angular/core';

// RxJs
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { Moviem } from '../models/moviem.model';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {
  //private getAllMoviesUrl = `${this.serverUrl}/api/all-movies`
  //https://localhost:44352/movies
  //private moviesEndpoint = 'https://www.omdbapi.com/?apikey=34478a98&s=batman&r=json';
  private moviesEndpoint = `https://localhost:44352/movies?t=`;
  constructor(
    private http: HttpClient) {}



  getMovies(search:string = ''): Observable<any>{
    return this.http.get(this.moviesEndpoint +search)
    .pipe(
      tap(_ => console.log(`fetched movies list`)),
      catchError(this.handleError('getMovies', []))
    );
  }
  getMovieById(id: string): Observable<any> {
  let moviesEndpoint =  `http://www.omdbapi.com/?apikey=34478a98&i=${id}&r=json`;
  const url = `${moviesEndpoint}/${id}`;
    return this.http.get(moviesEndpoint).pipe(
      tap(_ => console.log(`fetched movie with id=${id}`)),
      catchError(this.handleError<Moviem>(`getMovie id=${id}`))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
