import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Moviem } from '../models/moviem.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';
import { MoviesApiService } from '../services/movies-api.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit, OnChanges {
  moviem: Moviem = null;
  error: string = null;
  @Input() movie: Moviem;

  constructor(
    private moviesApiService: MoviesApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  ngOnChanges() { }

  getMovie(id: string) {
    this.moviesApiService.getMovieById(id)
    .subscribe(
      data => this.moviem = data,
      err => this.error = err,
      () => {this.openDialog();}
    );
   
  }
  openModal(): void {
    const  id  = this.movie.imdbID;
    this.getMovie(id);
    console.log("Opening Model");
    
  }

  openDialog() : void {
  const dialogRef = this.dialog.open(MovieModalComponent, {
    width: '50%',
    maxHeight: window.innerHeight + 'px',
    data: {movie: this.moviem}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}
  
}
