import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { HelperService } from './../../shared/services/helper.service';
import { MobileDetails } from './../../shared/interfaces/MobileDetails';

@Component({
  selector: 'app-mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileCardComponent {
  @Input() dataList: MobileDetails[] = [];
  @Input() errorMessage: string | null | undefined = null;
  @Input() loading: boolean = true;

  constructor(private _helperService: HelperService) {}

  openModal(): void {
    this._helperService.popupMessage$.next('Please login to use this feature.');
  }
}
