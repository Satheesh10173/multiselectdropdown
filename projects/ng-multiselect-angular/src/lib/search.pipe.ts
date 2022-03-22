import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchValue: string): any {
    if (!items || !searchValue) {
        return items;
    }
    return items.filter(item => item.name.toLowerCase().indexOf(searchValue.trim().toLowerCase()) !== -1);
}

}
