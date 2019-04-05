
import { BasicComponent } from '../basic/basic.component';
import { Component, OnInit } from '@angular/core';
import { SettingObjComponent } from '../../module/setting-object.component';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent extends BasicComponent implements OnInit, SettingObjComponent{
  constructor() {
    super();
  }

  ngOnInit() {
    this.initData();
  }
}
