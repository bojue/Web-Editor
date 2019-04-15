import { Component, OnInit } from "@angular/core";
import { StyleBasicComponent } from "src/app/component/basic/style-basic/style-basic.component";

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
