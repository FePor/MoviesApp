export class FilterSetting {
fromDate: any
toDate: any
genere: string
rating: any
language: any
rate: any
constructor(){
  this.fromDate = null;
  this.toDate = null;
  this.genere = 'all';
  this.rating = null;
  this.language = 'all';
  this.rate ={from:0,to:10}
}
clear():void{
  this.fromDate = null;
  this.toDate = null;
  this.genere = 'all';
  this.rating = null;
  this.language = 'all';
  this.rate ={from:0,to:10}
}
}
