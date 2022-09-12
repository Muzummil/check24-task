import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import { HelperService } from './../../../services/helper.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit {
  public modalMessage: string = 'Please login to use this feature.';

  @ViewChild('myModal', { static: false }) modal: ElementRef;

  constructor(public helperService: HelperService) {}

  ngOnInit(): void {
    this.helperService.popupMessage$.subscribe((res: string | null) => {
      if (res) {
        this.modalMessage = res;
        this.open();
      } else {
        this.close();
      }
    });
  }
  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    try {
      this.modal.nativeElement.style.display = 'none';
    } catch (error) {}
  }
}
