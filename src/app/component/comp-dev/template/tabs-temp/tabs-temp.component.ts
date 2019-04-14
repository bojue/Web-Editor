import { TempBasicComponent } from '../temp-basic/temp-basic.component';
import { SettingObject } from '../../../../module/setting-object.module';
import { SettingStyle } from '../../../../module/setting-style.module';
import { SettingDate } from '../../../../module/setting-data.module';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tabs-temp',
  templateUrl: './tabs-temp.component.html',
  styleUrls: ['./tabs-temp.component.scss']
})
export class TabsTempComponent extends TempBasicComponent implements OnInit {

  constructor() {
    super()
   }

  ngOnInit() {
    this.initBasicData()
  }

  compEvent(event) {
    this.onChildComponentChange.emit(event);
  }
}
