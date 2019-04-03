import { SettingObjComponent } from '../../../code/setting-object.component';
import { SettingObject } from '../../../module/setting-object.module';
import { Component, OnInit ,Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements SettingObjComponent {
  @Input() settingObj: SettingObject;
  @Output() onChildComponentChange = new EventEmitter<any>();
  style: any;
  data: any;
  inputBool : boolean;
  statue: any;

  constructor() { }

  expandUnit(param) {
    let paramVal = this.style[param] || 1;
    return paramVal + 'px'; ;
  }

  ngOnInit() {
    this.inputBool = false;
    this.style = this.settingObj && this.settingObj['style'] || {};
    this.data = this.settingObj && this.settingObj['data'] || {};
    this.statue = this.settingObj && this.settingObj['statue'] || {}
  }

  compEvent(event) {
    this.onChildComponentChange.emit(event);
  }

  inputState(event) {
    this.statue['editeabled'] = true;
  }

  inputVal(event) {
    let text = event.target && event.target.innerHTML && event.target.innerHTML.trim();
    this.data['value'] = text;
  }
}
