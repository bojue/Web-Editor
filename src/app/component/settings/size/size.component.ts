
import { Component, OnInit, Input } from '@angular/core';
import { SettingStyle } from 'src/app/module/setting-style.module';
import { SettingBasicComponent } from '../setting-basic/setting-basic.component';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent extends SettingBasicComponent implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
  }

}
