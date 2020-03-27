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
        this.toastr.info(null, params['info']);
        break;
      case this.STATE.WARNING:
        this.toastr.warning(null, params['info']);
        break;
      case this.STATE.ERROR:
        this.toastr.error(null, params['info']);
        break;
      default:
        this.toastr.success(null, params['info']);
        break;
    }

  }
}
