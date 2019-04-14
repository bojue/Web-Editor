import { Component, OnInit } from "@angular/core";
import { StyleBasicComponent } from "src/app/component/comp-basic/style-basic/style-basic.component";

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss']
})
export class FontsComponent extends StyleBasicComponent implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
  }

}
