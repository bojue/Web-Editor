import { BasicComponent } from '../basic/basic.component';
import { Component, OnInit } from '@angular/core';
import { SettingObjComponent } from '../../module/setting-object.component';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})

export class ImgComponent extends BasicComponent implements OnInit, SettingObjComponent{
  constructor() {
    super();
  }

  ngOnInit() {
    this.initData();
  }
}
