import { SettingObject } from '.history/src/app/communal/modules/setting-object_20190327170043';
import { Component, OnInit, Renderer2, ElementRef, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comp-setting',
  templateUrl: './comp-setting.component.html',
  styleUrls: ['./comp-setting.component.scss']
})
export class CompSettingComponent implements OnInit{
   @Input() activeSettingObj: SettingObject = {}
   @Output() settingObjChange = new EventEmitter<any>();

  constructor(private renderer: Renderer2, eleRef: ElementRef) { 
    this.initData()
  }

  ngOnInit() {
 
  }

  initData() {
    this.activeSettingObj = {
      'style': {}
    }
  }

  paramsChange(key: string) {
    this.settingObjChange.emit(this.activeSettingObj)
  }

}
