import { Component, OnInit } from "@angular/core";
import { StyleBasicComponent } from "src/app/component/basic/style-basic/style-basic.component";

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss']
})
export class FontsComponent extends StyleBasicComponent implements OnInit {
  fontAlign: any[];
  constructor() { 
    super()
  }

  ngOnInit() {
    this.fontAlign = [
      {
        name:"左",
        value:'left'
      },{
        name:'中',
        value: 'center'
      },{
        name:'右',
        value:'right'
      }
    ] 
  }

  changeStyle(param, val) {
    this.style[param] = val;
  }
}
