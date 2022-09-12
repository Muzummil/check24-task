import { catchError, ignoreElements, Observable, of } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ErrorService } from './../../../shared/services/error.service';
import { DataService } from './../../../shared/services/data.service';
import { HelperService } from './../../../shared/services/helper.service';
import { MobileDetails } from './../../../shared/interfaces/MobileDetails';
import { CustomErrorObj } from './../../../shared/interfaces/Error';
import { Categories } from './../../../shared/interfaces/Categories';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComparisonComponent implements OnInit {
  public categoriesList: Categories[] = this.helperService.getCategoriesList();
  public activeCategoryKey: string = this.categoriesList[0].categoryKey;
  public mobileDetails$: Observable<MobileDetails[]> | null = null;
  public mobileDetailsError$: Observable<string> | null = null;
  constructor(
    public helperService: HelperService,
    private _dataService: DataService,
    private _errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.getMobileDetails();
  }

  getMobileDetails(): void {
    this.mobileDetails$ = this._dataService.getMobileDetailsObs(
      this.activeCategoryKey
    );

    this.mobileDetailsError$ = this.mobileDetails$.pipe(
      ignoreElements(),
      catchError((error: CustomErrorObj) => {
        const errorMessage: string = this._errorService.getErrorMessage(error);
        return of(errorMessage);
      })
    );
  }

  chanageCategory(categoryKey: string): void {
    this.activeCategoryKey = categoryKey;
    this.getMobileDetails();
  }

  ngOnDestroy(): void {
    this.categoriesList = [];
    this.activeCategoryKey = '';
  }
}
