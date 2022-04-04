import { Component, OnInit } from "@angular/core";
import { DataBasicComponent } from "../../../comp-basic/data-basic/data-basic.component";

@Component({
  selector: 'app-list-val',
  templateUrl: './list-val.component.html',
  styleUrls: ['./list-val.component.scss']
})
export class ListValComponent extends DataBasicComponent implements OnInit {
  override data_type = 'list_val';
  list_grid_list: any;
  constructor() {
    super()
  }

  override ngOnInit() {
    this.initDate();
  }

  initDate() {
    this.list_grid_list = [
      {name: 'grid', value: true},
      {name: '?�', value: false}
    ]
  }

}
