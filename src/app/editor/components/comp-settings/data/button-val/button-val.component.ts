import { Component, OnInit } from "@angular/core";
import { DataBasicComponent } from "../../../comp-basic/data-basic/data-basic.component";

@Component({
  selector: 'app-button-val',
  templateUrl: './button-val.component.html',
  styleUrls: ['./button-val.component.scss']
})
export class ButtonValComponent extends DataBasicComponent implements OnInit {
  data_type = 'button_val';

  constructor() { 
    super()
  }

  ngOnInit() {}
}
