import { Component, OnInit } from "@angular/core";
import { DataBasicComponent } from "../../../comp-basic/data-basic/data-basic.component";

@Component({
  selector: 'app-textarea-val',
  templateUrl: './textarea-val.component.html',
  styleUrls: ['./textarea-val.component.scss']
})
export class TextareaValComponent extends DataBasicComponent implements OnInit {
  data_type = 'textarea_val';

  constructor() { 
    super()
  }

  ngOnInit() {
    this.initParentData();
  }
}
