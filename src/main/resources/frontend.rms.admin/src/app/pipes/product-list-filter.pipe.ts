import { Pipe, PipeTransform } from '@angular/core';
import {ProductModel} from '../models/product-list.model';

@Pipe({
  name: 'filterProducts'
})
export class ProductListFilterPipe implements PipeTransform {
  transform(items: ProductModel[], searchText: string): ProductModel[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.title.toLocaleLowerCase().includes(searchText) || it.category.title.toLocaleLowerCase().includes(searchText);
    });
  }
}
