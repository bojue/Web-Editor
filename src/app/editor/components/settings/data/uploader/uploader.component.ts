import { Component, OnInit } from "@angular/core";
import { DataBasicComponent } from "src/app/editor/dev/comp-basic/data-basic/data-basic.component";

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent extends DataBasicComponent implements OnInit {
  constructor() {
    super()
  }

  ngOnInit() {

  }

}
