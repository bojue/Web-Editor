import { Component, OnInit } from "@angular/core";
import { StyleBasicComponent } from "../../../comp-basic/style-basic/style-basic.component";

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

  override ngOnInit() {
    this.initParentData();
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
    ] ;
    
  }

  changeStyle(param: string, val: string) {
    this.style[param] = val;
  }
}
