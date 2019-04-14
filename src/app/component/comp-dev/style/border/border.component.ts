import { Component, OnInit } from '@angular/core';
import { SettingBasicComponent } from '../setting-basic/setting-basic.component';

@Component({
  selector: 'app-border-component',
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.scss']
})
export class BorderComponent extends SettingBasicComponent implements OnInit {
  borderStyles:any[];
  constructor() { 
    super()
  }

  ngOnInit() {
    this.borderStyles = [
      {
        name:'无',
        value:''
      },
      {
        name:'直线',
        value:'solid'
      },
      {
        name: '点线',
        value:'dotted',
      },
      {
        name: '虚线',
        value: 'dashed',
      }
    ]
  }

}
