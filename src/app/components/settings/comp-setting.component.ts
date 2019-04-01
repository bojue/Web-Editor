import { SettingObject } from '.history/src/app/communal/modules/setting-object_20190327170043';
import { Component, OnInit, Renderer2, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-comp-setting',
  templateUrl: './comp-setting.component.html',
  styleUrls: ['./comp-setting.component.scss']
})
export class CompSettingComponent implements OnInit{
   @Input() activeSettingObj: SettingObject = {}

  constructor(private renderer: Renderer2, eleRef: ElementRef) { 
    this.renderer.setProperty(eleRef.nativeElement, 'author', 'maliang')
  }

  ngOnInit() {
    console.log(this.activeSettingObj)
  }

  paramsChange(event: any, key: string) {
    console.log(this.activeSettingObj)
    // if (!this.activeSettingObj.hasOwnProperty(key)) return false;
    // this.activeSettingObj[key] = event;
  }

}
