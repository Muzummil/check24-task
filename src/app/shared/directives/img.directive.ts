import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-img',
  template: `<img
    loading="lazy"
    src="{{ '../../../../assets/images/' + imgName }}"
    [class]="classes"
  />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgDirective {
  @Input() imgName: String = '';
  @Input() classes: String = '';

  constructor() {}
}
