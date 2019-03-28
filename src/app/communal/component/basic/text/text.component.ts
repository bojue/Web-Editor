import { SettingObject } from './../../code/setting-object.module';
import { SetttingObjComponent } from '../../code/seting-component.component';
import { Component, OnInit ,Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements SetttingObjComponent {
  @Input() settingObj: SettingObject;

  constructor() { }

  expandUnit(val = 100) {
    return val + 'px';
  }

}
