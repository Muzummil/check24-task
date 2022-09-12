import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Categories } from './../interfaces/Categories';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  public popupMessage$: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);

  constructor() {}

  public getCategoriesList(): Categories[] {
    return [
      { categoryKey: 'topseller', categoryName: 'Topseller' },
      { categoryKey: 'new', categoryName: 'New' },
      { categoryKey: 'offers', categoryName: 'Offers' },
      { categoryKey: 'popularity', categoryName: 'Popularity' },
    ];
  }
}
