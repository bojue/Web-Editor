import { Component, OnInit } from "@angular/core";
import { StyleBasicComponent } from "../../../comp-basic/style-basic/style-basic.component";

@Component({
  selector: 'app-padding',
  templateUrl: './padding.component.html',
  styleUrls: ['./padding.component.scss']
})
export class PaddingComponent extends StyleBasicComponent implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {

  }

}
