import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterSetting } from './models/filter.model';
import { Language } from './models/language.model';

import { MoviesComponent } from './movies.component';
import { MoviesApiService } from './services/movies-api.service';
import { SharedModule } from '../shared/shared.module';
import { EnumToArrayPipe } from './pipes/enumToArray.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FilterMoviesService } from './services/filter-movies.service';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieModalComponent } from './movie-modal/movie-modal.component'
import { MatDatepickerModule, MatInputModule,MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    FormsModule,MatDatepickerModule,MatInputModule,MatNativeDateModule
   ],
  declarations: [
    MoviesComponent,
    EnumToArrayPipe,
    FilterPipe,
    SortPipe,
    MovieItemComponent,
    MovieModalComponent

  ],
  exports: [MoviesComponent,FormsModule,HttpClientModule],
  providers: [
    HttpClientModule,
    MoviesApiService,
    FilterMoviesService,
    FilterSetting
    
  ], entryComponents: [MovieModalComponent,
  ]
})
export class MoviesModule { }
