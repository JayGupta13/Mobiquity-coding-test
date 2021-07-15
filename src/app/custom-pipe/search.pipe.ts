import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchInput:any): any {
    console.log(value);
    if(value.length == 0 || searchInput == '') {
      return value;
    } 
    //   const description = [];
    //   for(const data of value)
    //   if(data['description'] === searchInput) {
    //     description.push(data)      
    // }
    // return description;
  }

}
