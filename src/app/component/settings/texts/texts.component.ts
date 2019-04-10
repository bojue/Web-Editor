import { Component, OnInit } from '@angular/core';
import { SettingBasicComponent } from '../setting-basic/setting-basic.component';

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.scss']
})
export class TextsComponent extends SettingBasicComponent implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
  }

}
