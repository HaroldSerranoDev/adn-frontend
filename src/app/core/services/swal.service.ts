import {EventEmitter, Injectable} from '@angular/core';
import Swal, {SweetAlertIcon, SweetAlertPosition} from 'sweetalert2';
import {Icon} from '../icon.enum';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  clickConfirm: EventEmitter<void>;
  clickCancel: EventEmitter<void>;

  constructor() {
  }

  alert(title, text, icon = Icon.SUCCESS): void {
    Swal.fire(title, text, icon as SweetAlertIcon);
  }

  toast(title: string, icon = Icon.SUCCESS, position = 'top-start', timer = 3000): void {
    Swal.mixin({
      toast: true,
      position: position as SweetAlertPosition,
      showConfirmButton: false,
      timer,
      timerProgressBar: true,
      onOpen: toast => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    }).fire({
      icon: icon as SweetAlertIcon,
      title
    });
  }

  confirm(
    title = '',
    text = '',
    icon = 'warning',
    confirmButtonText = '',
    cancelButtonText = '',
    {
      clickConfirm = () => {
      }, clickCancel = () => {
    }
    } = {},
    showCancelButton = true
  ): Promise<any> {
    this.iniciarObservablesConfirm();
    return Swal.fire({
      title,
      text,
      icon: icon as SweetAlertIcon,
      showCancelButton,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText,
      cancelButtonText
    }).then(result => {
      if (result.value) {
        this.clickConfirm.subscribe(() => clickConfirm());
        this.clickConfirm.emit();
        this.clickConfirm.unsubscribe();
      } else {
        this.clickCancel.subscribe(() => clickCancel());
        this.clickCancel.emit();
        this.clickCancel.unsubscribe();
      }
    });
  }

  iniciarObservablesConfirm(): void {
    this.clickConfirm = new EventEmitter();
    this.clickCancel = new EventEmitter();
  }

}
