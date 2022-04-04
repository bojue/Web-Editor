import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TempoToastrService {
  STATE = {
    SUCCESS:'success',
    INFO:'info',
    WARNING:'warning',
    ERROR:"error"
  }
  constructor(
    private toastr: ToastrService
  ) { 

  }

  showToaster(params = { state:this.STATE.SUCCESS, info:'成功'}) {
    switch(params['state']) {
      case this.STATE.INFO:
        this.toastr.info('', params['info']);
        break;
      case this.STATE.WARNING:
        this.toastr.warning('', params['info']);
        break;
      case this.STATE.ERROR:
        this.toastr.error('', params['info']);
        break;
      default:
        this.toastr.success('', params['info']);
        break;
    }

  }
}
