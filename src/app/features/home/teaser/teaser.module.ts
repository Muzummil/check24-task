import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './../../../core/core.module';
import { SharedModule } from './../../../shared/shared.module';
import { TeaserComponent } from './teaser.component';
import { BrandsComponent } from './brands/brands.component';
@NgModule({
  declarations: [TeaserComponent, BrandsComponent],
  imports: [CommonModule, CoreModule, SharedModule, HttpClientModule],
  exports: [TeaserComponent],
})
export class TeaserModule {}
