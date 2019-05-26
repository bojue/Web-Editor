import { Component, OnInit } from '@angular/core';
import { StyleBasicComponent } from "../../../comp-basic/style-basic/style-basic.component";

@Component({
  selector: 'app-opacity',
  templateUrl: './opacity.component.html',
  styleUrls: ['./opacity.component.scss']
})
export class OpacityComponent extends StyleBasicComponent implements OnInit {
  fontAlign: any[];
  constructor() { 
    super()
  }
  
  ngOnInit() {
    this.initParentData();
  }

}
