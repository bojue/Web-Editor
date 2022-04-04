import { Component, OnInit } from "@angular/core";
import { StyleBasicComponent } from "../../../comp-basic/style-basic/style-basic.component";

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

  override ngOnInit() {
    this.initParentData();
    this.zIndexS = [
      1,2,3,4,5,6,7,8,9,10
    ];
  }

  setStyle(param:string, val: any) {
    this.style[param] = val;
  }

}