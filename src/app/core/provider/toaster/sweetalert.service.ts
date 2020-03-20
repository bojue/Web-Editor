import { Injectable } from '@angular/core';
import Swal from "sweetalert2";
import { Observable } from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class SweetalertService {

  constructor() { }

  deleteAlert(conent?:any){
   return Swal.fire({
      text: "你确定删除",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '确定删除',
      cancelButtonText:"取消"
    })
  }
}
