
import { Component, OnInit, Input } from '@angular/core';
import { SettingStyle } from '../../module/setting-style.module';


@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {
  @Input() style:SettingStyle;

  constructor() { }

  ngOnInit() {
    
  }

}
