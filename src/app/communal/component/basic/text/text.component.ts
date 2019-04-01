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
  style: any;
  data: any;

  constructor() { }

  expandUnit(param) {
    let paramVal = this.style[param] || 1;
    return paramVal + 'px'; ;
  }

  ngOnInit() {
    this.style = this.settingObj && this.settingObj['style'] || {};
    this.data = this.settingObj && this.settingObj['data'] || {};
  }

  selectComp(event) {
    this.onChildComponentChange.emit(event);
  }
}
