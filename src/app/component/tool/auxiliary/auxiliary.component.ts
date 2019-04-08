import { SettingStyle } from './../../../module/setting-style.module';
import { Component, OnInit, ElementRef } from '@angular/core';
import { BasicComponent } from '../../basic/basic/basic.component';
import { SettingObjComponent } from 'src/app/module/setting-object.component';

@Component({
  selector: 'app-auxiliary',
  templateUrl: './auxiliary.component.html',
  styleUrls: ['./auxiliary.component.scss']
})
export class AuxiliaryComponent extends BasicComponent implements OnInit, SettingObjComponent{
  element: any;
  style: SettingStyle;
  constructor(
    private elementRef: ElementRef
  ) {
    super();
  }

  ngOnInit() {

    this.initData();
  }

  initData() {
    this.style = this.settingObj['style'];
  }
}