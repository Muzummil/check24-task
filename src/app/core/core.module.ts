import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileCardComponent } from './mobile-card/mobile-card.component';
import { SharedModule } from '../shared/shared.module';
import { RatingsComponent } from './ratings/ratings.component';

@NgModule({
  declarations: [MobileCardComponent, RatingsComponent],
  imports: [CommonModule, SharedModule],
  exports: [MobileCardComponent, RatingsComponent],
})
export class CoreModule {}
