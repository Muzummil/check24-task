import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [FooterComponent, HeaderComponent],
})
export class LayoutModule {}
