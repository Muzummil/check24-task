import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComparisonModule } from './comparison/comparison.module';
import { TeaserModule } from './teaser/teaser.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ComparisonModule, TeaserModule],
})
export class HomeModule {}
