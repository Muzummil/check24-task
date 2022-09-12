import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ComparisonComponent } from './comparison.component';
import { CoreModule } from './../../../core/core.module';
import { SharedModule } from './../../../shared/shared.module';
@NgModule({
  declarations: [ComparisonComponent],
  imports: [CommonModule, CoreModule, SharedModule, HttpClientModule],
  exports: [ComparisonComponent],
})
export class ComparisonModule {}
