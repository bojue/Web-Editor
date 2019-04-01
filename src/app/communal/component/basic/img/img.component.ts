import { SettingObjComponent } from '../../code/seting-component.component';
import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { SettingObject } from '../../code/setting-object.module';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})

export class ImgComponent implements OnInit, SettingObjComponent{
  @Input() settingObj: SettingObject;
  @Output() onChildComponentChange = new EventEmitter<any>();
  style: any;
  data: any;
  constructor() {

  }

   ngOnInit() {
     this.style = this.settingObj && this.settingObj['style'] || {};
     this.data = this.settingObj && this.settingObj['data'] || {};
   }

   expandUnit(param) {
     let paramVal = this.style[param] || 1;
     return paramVal + 'px'; 
   }
  
   selectComp(event) {
    this.onChildComponentChange.emit(event);
  }
   
}
