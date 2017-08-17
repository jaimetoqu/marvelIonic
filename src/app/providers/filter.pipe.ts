import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform{

    transform(comics: Array<any>, comicFilter: any): any{
      
      //if (comics == undefined) return comics;  
      let parts = comicFilter && comicFilter.toString().trim().split(/\s+/),
            keys = Object.keys(comicFilter);
      if (comics == undefined || !parts.length) return comics;
      return comics.filter(comic => {
            return parts.every(part => {
                return keys.some(key => {
                    return String(comic[key]).toLowerCase().indexOf(part.toLowerCase()) > -1;
                });
            });
      });
   }
}


/*let parts = comicFilter && comicFilter.toString().trim().split(/\s+/),
            keys = Object.keys(comicFilter);
      if (!parts || !parts.length) return comics;
      return comics.filter(comic => {
            return parts.every(part => {
                return keys.some(key => {
                    return String(comic[key]).toLowerCase().indexOf(part.toLowerCase()) > -1;
                });
            });
      });*/

/*transform(comics: Array<any>, comicFilter: {[key: string]: any }): Array<any> {
        return comics.filter(comic => {
            let notMatchingField = Object.keys(comicFilter)
                                          .find(key => comic[key] !== comicFilter[key]);
            return !notMatchingField; // true if matches all fields
        });
    }*/
