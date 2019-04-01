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
      console.log(this.settingObj)
      this.style = this.settingObj && this.settingObj['style'] || {};
      this.data = this.settingObj && this.settingObj['data'] || {};
    }

   expandUnit(param) {
     let paramVal = this.style[param] || 100;
     return paramVal + 'px'; 
   }
  
   getCurrentCompName(name: string) {
     console.log("currentName --->  ", name)
   }

   
   selectComp(event) {
    console.log(this.settingObj, this.data)
    this.onChildComponentChange.emit(event);
  }
   
}
