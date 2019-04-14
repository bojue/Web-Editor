import { SettingStyle } from '../../../../module/setting-style.module';
import { Component, OnInit, ElementRef } from '@angular/core';
import { SettingObjComponent } from 'src/app/module/setting-object.component';
import { BasicComponent } from 'src/app/component/comp-basic/basic/basic.component';

@Component({
  selector: 'app-auxiliary',
  templateUrl: './auxiliary.component.html',
  styleUrls: ['./auxiliary.component.scss']
})
export class AuxiliaryComponent extends BasicComponent implements OnInit, SettingObjComponent{
  constructor() {
    super();
  }

  ngOnInit() {
    this.initData();
  }
}