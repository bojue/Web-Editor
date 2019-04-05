import { SettingStyle } from '../../module/setting-style.module';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {
  @Input() style:SettingStyle;
  constructor() { }

  ngOnInit() {
  }

}
