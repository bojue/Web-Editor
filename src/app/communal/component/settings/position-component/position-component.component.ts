import { Component, OnInit, Input } from '@angular/core';
import { SettingObject } from '../../../module/setting-object.module';

@Component({
  selector: 'app-position-component',
  templateUrl: './position-component.component.html',
  styleUrls: ['./position-component.component.scss']
})
export class PositionComponentComponent implements OnInit {
  @Input() style:SettingObject;
  constructor() { }

  ngOnInit() {
  }

}
