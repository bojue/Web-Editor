import { Component, OnInit } from "@angular/core";
import { TempBasicComponent } from "src/app/component/basic/temp-basic/temp-basic.component";

@Component({
  selector: 'app-tabs-temp',
  templateUrl: './tabs-temp.component.html',
  styleUrls: ['./tabs-temp.component.scss']
})
export class TabsTempComponent extends TempBasicComponent implements OnInit {

  constructor() {
    super()
   }

  ngOnInit() {
    this.initData()
  }

  compEvent(event) {
    this.onChildComponentChange.emit(event);
  }
}
