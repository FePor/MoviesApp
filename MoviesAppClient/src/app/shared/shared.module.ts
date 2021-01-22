import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingSpinnerComponent } from './loading-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    LoadingSpinnerComponent
  ],
  exports: [
    CommonModule,
    LoadingSpinnerComponent,
    BrowserAnimationsModule
  ],
  providers: [ ]
})
export class SharedModule { }
