import { Component, OnInit } from "@angular/core";
import { StyleBasicComponent } from "./node_modules/src/app/component/dev/basic/style-basic/style-basic.component";

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent extends StyleBasicComponent implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {

  }

}
