import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(comics: Array<any>, comicFilter: {[key: string]: any }): Array<any> {
        return comics.filter(comic => {
            let notMatchingField = Object.keys(comicFilter)
                                          .find(key => comic[key] !== comicFilter[key]);
            return !notMatchingField; // true if matches all fields
        });
    }
}