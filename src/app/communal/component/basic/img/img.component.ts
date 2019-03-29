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
  
  constructor() {

  }

   ngOnInit() {
  
   }

   expandUnit(val = 100) {
     return val + 'px';
   }
}
