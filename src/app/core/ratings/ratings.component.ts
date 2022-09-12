import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingsComponent {
  private readonly MAX_NUMBER_OF_STARS = 5;

  @Input() rating: number = 0;

  private get numberOfFullStars(): number {
    return Math.floor(this.rating);
  }

  private get numberOfEmptyStars(): number {
    return this.MAX_NUMBER_OF_STARS - Math.ceil(this.rating);
  }

  get fullStars(): Array<number> {
    return Array(this.numberOfFullStars);
  }

  get emptyStars(): Array<number> {
    return Array(this.numberOfEmptyStars);
  }

  get hasAnHalfStar(): boolean {
    return this.rating % 1 !== 0;
  }
}
