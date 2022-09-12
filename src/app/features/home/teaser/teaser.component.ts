import { Observable, ignoreElements, catchError, of } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Brands } from './../../../shared/interfaces/Brands';
import { DataService } from './../../../shared/services/data.service';
import { CustomErrorObj } from './../../../shared/interfaces/Error';
import { ErrorService } from './../../../shared/services/error.service';
import { HelperService } from './../../../shared/services/helper.service';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeaserComponent implements OnInit {
  public brandsList$: Observable<Brands[]> | null = null;
  public brandsListError$: Observable<string> | null = null;
  constructor(
    private _dataService: DataService,
    private _errorService: ErrorService,
    private _helperService: HelperService
  ) {}

  ngOnInit(): void {
    this.getBrandsDetails();
  }

  openModal(): void {
    this._helperService.popupMessage$.next('Please login to use this feature.');
  }

  getBrandsDetails(): void {
    this.brandsList$ = this._dataService.getBrandsObs();

    this.brandsListError$ = this.brandsList$.pipe(
      ignoreElements(),
      catchError((error: CustomErrorObj) => {
        const errorMessage: string = this._errorService.getErrorMessage(error);
        return of(errorMessage);
      })
    );
  }
}
