import { Component, OnInit, Input } from '@angular/core';
import { SettingStyle } from 'src/app/module/setting-style.module';

@Component({
  selector: 'app-setting-basic',
  templateUrl: './setting-basic.component.html',
  styleUrls: ['./setting-basic.component.scss']
})
export class SettingBasicComponent implements OnInit {
  @Input() style: SettingStyle;

  constructor() { }

  ngOnInit() {
    
  }
}