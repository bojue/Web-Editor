import { Component, OnInit, Input } from '@angular/core';
import { SettingStyle } from './node_modules/src/app/editor/module/setting-style.module';

@Component({
  selector: 'app-style-basic',
  templateUrl: './style-basic.component.html',
  styleUrls: ['./style-basic.component.scss']
})
export class StyleBasicComponent implements OnInit {
  @Input() style: SettingStyle;

  constructor() { }

  ngOnInit() {
    
  }
}