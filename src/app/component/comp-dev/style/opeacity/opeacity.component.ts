import { Component, OnInit } from "@angular/core";
import { StyleBasicComponent } from "src/app/component/comp-basic/style-basic/style-basic.component";

@Component({
  selector: 'app-opeacity',
  templateUrl: './opeacity.component.html',
  styleUrls: ['./opeacity.component.scss']
})
export class OpeacityComponent extends StyleBasicComponent implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
  }

}
