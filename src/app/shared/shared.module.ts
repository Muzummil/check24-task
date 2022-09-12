import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RequestsInterceptor } from './interceptors/requests.interceptors';
import { CacheService } from './services/cache.service';
import { ImgDirective } from './directives/img.directive';
import { DataService } from './services/data.service';
import { ErrorService } from './services/error.service';
import { ModalComponent } from './directives/popup/modal/modal.component';

@NgModule({
  declarations: [ImgDirective, ModalComponent],
  imports: [CommonModule],
  providers: [
    DataService,
    CacheService,
    ErrorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestsInterceptor,
      multi: true,
    },
  ],
  exports: [ImgDirective, ModalComponent],
})
export class SharedModule {}
