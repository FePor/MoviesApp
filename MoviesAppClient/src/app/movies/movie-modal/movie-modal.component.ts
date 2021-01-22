import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Moviem } from '../models/moviem.model';
import { DomSanitizer } from '@angular/platform-browser';

export interface DialogData {
  movie: Moviem;
}

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss']
})
export class MovieModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MovieModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private _sanitizer: DomSanitizer
  ) {

   }

  ngOnInit() {
  }


  onCloseClick(): void {
    this.dialogRef.close();
  }


}
