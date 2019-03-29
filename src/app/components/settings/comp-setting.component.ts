import { SettingObject } from '.history/src/app/communal/modules/setting-object_20190327170043';
import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-comp-setting',
  templateUrl: './comp-setting.component.html',
  styleUrls: ['./comp-setting.component.scss']
})
export class CompSettingComponent implements OnInit{
  /**
   * 属性对象声明
   * @param height 高度
   * @param width 宽度
   */
  private settingObj: SettingObject = {
    height: 300,
    width: 300
  }

  constructor(private renderer: Renderer2, eleRef: ElementRef) { 
    this.renderer.setProperty(eleRef.nativeElement, 'author', 'maliang')
  }

  ngOnInit() {
    console.log(this.settingObj)
  }

  paramsChange(event: any, key: string) {
    if (!this.settingObj.hasOwnProperty(key)) return false;
    this.settingObj[key] = event;
  }

}
