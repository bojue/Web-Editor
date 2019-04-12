import { Component, OnInit } from '@angular/core';
import { SettingBasicComponent } from '../setting-basic/setting-basic.component';

@Component({
  selector: 'app-opeacity',
  templateUrl: './opeacity.component.html',
  styleUrls: ['./opeacity.component.scss']
})
export class OpeacityComponent extends SettingBasicComponent implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
  }

}
