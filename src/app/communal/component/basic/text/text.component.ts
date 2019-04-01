import { SettingObject } from '../../code/setting-object.module';
import { SettingObjComponent } from '../../code/seting-component.component';
import { Component, OnInit ,Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements SettingObjComponent {
  @Input() settingObj: SettingObject;
  @Output() onChildComponentChange = new EventEmitter<any>();

  constructor() { }

  expandUnit(val = 100) {
    return val + 'px';
  }

  getCurrentCompName(name: string) {
    console.log("currentName --->  ", name)
  }


  selectComp(event) {
    this.onChildComponentChange.emit(event);
  }
}
