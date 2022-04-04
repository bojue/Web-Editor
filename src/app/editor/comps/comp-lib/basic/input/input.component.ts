import { Component } from "@angular/core";
import { BasicComponent } from "../../../comp-basic/basic/basic.component";
import { SettingObjComponent } from "src/app/editor/model/setting-object.interface";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends BasicComponent implements SettingObjComponent {
  inputBool : boolean;
  statue: any;

  constructor() {
    super();
  }

  override ngOnInit() {
    this.initData();
  }
}