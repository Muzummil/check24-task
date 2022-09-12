import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay, take } from 'rxjs';

import { environment } from './../../../environments/environment.prod';
import { MobileDetails } from '../interfaces/MobileDetails';
import { Brands } from './../interfaces/Brands';
@Injectable()
export class DataService {
  private API_BASE_URL: string = environment.baseAPIURL;

  constructor(private _http: HttpClient) {}

  getMobileDetailsObs(
    categoryFilterKey: string | null = null
  ): Observable<MobileDetails[]> {
    const apiURL = this.API_BASE_URL + 'handy.json';
    return this._http.get<MobileDetails[]>(apiURL).pipe(
      map((value: MobileDetails[]) => {
        return this.filterDataArry(categoryFilterKey, value);
      }),
      take(1),
      shareReplay()
    );
  }

  getBrandsObs(): Observable<Brands[]> {
    const apiURL = this.API_BASE_URL + 'handy.json';
    return this._http.get<Brands[]>(apiURL).pipe(
      map((value: Brands[]) => this.filterBrandsList(value)),
      take(1),
      shareReplay()
    );
  }

  private filterDataArry(
    categoryKey: string | null,
    mobileList: MobileDetails[]
  ): MobileDetails[] {
    if (categoryKey) {
      if (categoryKey === 'offers') {
        mobileList = this.filterOffersList(mobileList);
      } else if (categoryKey === 'popularity') {
        mobileList = this.filterPopularityList(mobileList);
      } else {
        mobileList = this.filterCategoryList(mobileList, categoryKey);
      }
    } else return mobileList;

    return mobileList;
  }

  private filterOffersList(originalArray: MobileDetails[]): MobileDetails[] {
    return originalArray.filter((item) => item.price_reduced);
  }
  private filterPopularityList(
    originalArray: MobileDetails[]
  ): MobileDetails[] {
    return originalArray.filter((item) => item.rating > 4);
  }
  private filterCategoryList(
    originalArray: MobileDetails[],
    categoryKey: string
  ): MobileDetails[] {
    return originalArray.filter((item: any) => item[categoryKey]);
  }
  private filterBrandsList(originalArray: Brands[]): Brands[] {
    let brandsArry: Brands[] = [];
    originalArray.forEach((brand: any) => {
      if (
        brand.price_reduced &&
        !brandsArry.some((item: any) => item.brand === brand.brand)
      ) {
        brand.image = brand.brand.toLowerCase();
        brandsArry.push(brand);
      }
    });

    return brandsArry;
  }
}
