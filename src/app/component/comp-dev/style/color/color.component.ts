import { Component, OnInit } from '@angular/core';
import { SettingBasicComponent } from '../setting-basic/setting-basic.component';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent extends SettingBasicComponent implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
  }

}
