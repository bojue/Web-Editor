import { SettingBasicComponent } from './../setting-basic/setting-basic.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent extends SettingBasicComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
