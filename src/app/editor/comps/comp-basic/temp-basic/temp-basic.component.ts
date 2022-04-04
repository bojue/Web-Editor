import { Component, OnInit } from "@angular/core";
import { BasicComponent } from "../basic/basic.component";

@Component({
  selector: 'app-temp-basic',
  templateUrl: './temp-basic.component.html',
  styleUrls: ['./temp-basic.component.scss']
})
export class TempBasicComponent extends BasicComponent implements OnInit {
  constructor() { 
    super()
  }


}
