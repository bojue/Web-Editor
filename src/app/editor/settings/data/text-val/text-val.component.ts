import { Component, OnInit } from "@angular/core";
import { DataBasicComponent } from "./node_modules/src/app/component/dev/basic/data-basic/data-basic.component";

@Component({
  selector: 'app-text-val',
  templateUrl: './text-val.component.html',
  styleUrls: ['./text-val.component.scss']
})
export class TextValComponent extends DataBasicComponent implements OnInit {
  data_type = 'text_val';

  constructor() { 
    super()
  }

  ngOnInit() {}
}
