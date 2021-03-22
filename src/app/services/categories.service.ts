import { CATEGORIES } from './../views/mock-data-categories';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../views/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}

  getCategories(): Observable<Category[]> {
    const categories = of(CATEGORIES);
    return categories;
  }

  getDetailCategory(friendlyName: string): Observable<Category> {
    const category = CATEGORIES.find(
      (c) => c.friendlyName === friendlyName
    ) as Category;

    return of(category);
  }
}
