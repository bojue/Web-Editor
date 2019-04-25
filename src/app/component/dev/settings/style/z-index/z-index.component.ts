import { Component, OnInit } from '@angular/core';
import { StyleBasicComponent } from 'src/app/component/basic/style-basic/style-basic.component';

@Component({
  selector: 'app-z-index',
  templateUrl: './z-index.component.html',
  styleUrls: ['./z-index.component.scss']
})
export class ZIndexComponent extends StyleBasicComponent implements OnInit {
  zIndexS:any[];
  constructor() { 
    super()
  }

  ngOnInit() {
    this.zIndexS = [
      1,2,3,4,5,6,7,8,9,10
    ]
  }

  setStyle(param, val) {
    this.style[param] = val;
    console.log(this.style)
  }

}