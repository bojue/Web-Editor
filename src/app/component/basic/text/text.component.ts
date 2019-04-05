import { BasicComponent } from '../basic/basic.component';
import { Component, OnInit ,Output, Input, EventEmitter} from '@angular/core';
import { SettingObjComponent } from '../../module/setting-object.component';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent extends BasicComponent implements SettingObjComponent {
  inputBool : boolean;
  statue: any;

  constructor() {
    super();
  }

  ngOnInit() {
    this.initData();
  }

  inputState(event) {
    this.settingObj['editeabled'] = true;
  }


}
