
import { Component, OnInit, Input } from '@angular/core';
import { SettingStyle } from 'src/app/module/setting-style.module';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {
  @Input() style: SettingStyle;

  constructor() { }

  ngOnInit() {
    
  }

}

