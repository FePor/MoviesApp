import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {
  transform(array: any[], type: string, as: boolean): any[] {
    let field = 'Released';
    
    if(type && type!="" && type === "Lastest"){
    array.sort((a: any, b: any) => {
      let dateA = new Date(a[field]).getTime();
      let dateB = new Date(b[field]).getTime();
      if (dateA > dateB) {
        return -1;
      } else if (dateA < dateB) {
        return 1;
      } else {
        return 0;
      }
    });
  }else if(type && type!="" && type === "Oldest")  {
    array.sort((a: any, b: any) => {
      let dateA = new Date(a[field]).getTime();
      let dateB = new Date(b[field]).getTime();
      if (dateA < dateB) {
        return -1;
      } else if (dateA > dateB) {
        return 1;
      } else {
        return 0;
      }
    });
  }
    return array;
  }
  
}
