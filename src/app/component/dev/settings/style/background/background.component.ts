import { Component, OnInit } from "@angular/core";
import { StyleBasicComponent } from "./node_modules/src/app/component/basic/style-basic/style-basic.component";

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent extends StyleBasicComponent implements OnInit {
  backgroundArr: any[];
  constructor() {
    super();
   }

  ngOnInit() {
    this.backgroundArr = [
      '#ffffff',
      '#e6e6e6',
      '#cdcdcd',
      '#707070',
      '#2c2c2c',

      '#d81e06',
      '#f4ea2a',
      '#1afa29',
      '#1296db',
      '#13227a',
    ]
  }

  selColor(col) {
    this.style['background'] = col;
  }
}
