import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Brands } from './../../../../shared/interfaces/Brands';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsComponent {
  @Input() dataList: Brands[] = [];
  @Input() errorMessage: string | null | undefined = null;
  @Input() loading: boolean = true;
  constructor() {}
}
