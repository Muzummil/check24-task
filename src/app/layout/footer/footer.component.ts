import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public email: string = '';
  public emailValidationPattern: string =
    '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  constructor() {}
}
