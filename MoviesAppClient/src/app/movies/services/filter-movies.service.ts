import { Injectable } from '@angular/core';

@Injectable()
export class FilterMoviesService {
  constructor() { }

  filterMovies(filter: string, movies: any) {
    if (!filter || filter === 'all') {
      return movies;
    }
    return movies.filter(c => c.Type.includes(filter));//geners
  };

  filterMoviesBy(filter: any, movies: any) {
    if (!filter ) {
      return movies;
    }
    if(filter.genere && filter.genere !== 'all')
      movies = movies.filter(c => c.Genre.toLowerCase().includes(filter.genere.toLowerCase()));
    if(filter.fromDate && filter.fromDate !== 'all')
      movies = movies.filter(c => new Date(c.Released).getTime() >= new Date(filter.fromDate).getTime());
    if(filter.toDate && filter.toDate !== 'all')
      movies = movies.filter(c => new Date(c.Released).getTime() <= new Date(filter.toDate).getTime());

    if(filter.language && filter.language !== 'all')
      movies = movies.filter(c => c.Language.join(" ").toLowerCase().includes(filter.language.toLowerCase()));
    if(filter.rate.from && filter.rate.from >= 0)
      movies = movies.filter(c =>  c.Rating == null || c.Rating>=filter.rate.from );
    if(filter.rate.to && filter.rate.to >= 0)
      movies = movies.filter(c => c.Rating == null || c.Rating<=filter.rate.to );
    return movies;//geners
  }
}
