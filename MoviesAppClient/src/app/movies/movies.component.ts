import { Component, OnInit } from '@angular/core';
import {Moviem}  from './models/moviem.model';
import { FilterSetting } from './models/filter.model';
import { Genre } from './models/genre.model';
import { Language } from './models/language.model';
import { MoviesApiService } from './services/movies-api.service';
import { FilterMoviesService } from './services/filter-movies.service';
import { FadeIn } from '../shared/animations';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: [
    FadeIn
  ]
})
export class MoviesComponent implements OnInit {
  movies: Moviem[] = null;
  visibleMovies: Moviem[] = null;

  searchText: any = '';
  searchTitle: any = '';
  sortBy: any = 'Lastest';
  public genres = Genre;
  selectedGenre = 'all';
  public languages: Language;

  filterLanguage: any = 'all';
  moviesFilter: FilterSetting;
  
  constructor(
    private moviesApiService: MoviesApiService,
    private filterMoviesService: FilterMoviesService
    ){
      this.moviesFilter = new FilterSetting();
    }

  ngOnInit() {
  
    //this.loadMovies('batman');
    this.loadMovies();
  }
  
  loadMovies(search:string =''){
    this.moviesApiService.getMovies(search)
    .subscribe(movies => {
      this.movies = movies.Search;
      this.applyFilterBy();
    });

  }

  languagesKeys() : Array<string>{
      return Object.keys(this.languages);
  }

  changeFilter(event: any):void{
    event.preventDefault();
    const targetGenre = event.target.innerText.toLowerCase();
    this.moviesFilter.genere = targetGenre;
    this.applyFilterBy();
  }
  changeLanguage(event: any):void {
    const targetlang = event.target.value;
    this.moviesFilter.language = targetlang;
    this.applyFilterBy();
  }
  changeTitle(event: any):void {
    //this.moviesFilter.clear()
    this.loadMovies(this.searchTitle);
  }
  onfromDate(event): void {
    this.moviesFilter.fromDate = event.value;
    this.applyFilterBy();
  }
  ontoDate(event): void {
    this.moviesFilter.toDate = event.value;
    this.applyFilterBy();

  }
  changeRate(event): void {
    this.moviesFilter.rate.from = parseFloat(event.target.value);
    this.applyFilterBy();
  }
  changeRateTo(event): void {
    this.moviesFilter.rate.to = parseFloat(event.target.value);
    this.applyFilterBy();
  }
  
  private applyFilterBy() {
    this.visibleMovies = this.filterMoviesService.filterMoviesBy(this.moviesFilter, this.movies);
  }

  


  

  

}
