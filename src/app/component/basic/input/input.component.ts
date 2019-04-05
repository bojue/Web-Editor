import { BasicComponent } from '../basic/basic.component';
import { Component, OnInit } from '@angular/core';
import { SettingObjComponent } from 'src/app/module/setting-object.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends BasicComponent implements SettingObjComponent {
  inputBool : boolean;
  statue: any;

  constructor() {
    super();
  }

  ngOnInit() {
    this.initData();
  }
}