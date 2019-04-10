import { Component, OnInit } from '@angular/core';
import { SettingBasicComponent } from '../setting-basic/setting-basic.component';

@Component({
  selector: 'app-border-component',
  templateUrl: './border-component.component.html',
  styleUrls: ['./border-component.component.scss']
})
export class BorderComponentComponent extends SettingBasicComponent implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
  }

}
