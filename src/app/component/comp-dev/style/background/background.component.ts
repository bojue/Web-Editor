import { Component, OnInit } from "@angular/core";
import { StyleBasicComponent } from "src/app/component/comp-basic/style-basic/style-basic.component";

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent extends StyleBasicComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
