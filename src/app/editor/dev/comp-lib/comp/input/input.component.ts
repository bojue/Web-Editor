import { Component } from "@angular/core";
import { BasicComponent } from "./node_modules/src/app/editor/dev/comp-basic/basic/basic.component";
import { SettingObjComponent } from "./node_modules/src/app/editor/module/setting-object.component";

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

  ngOnInit() {
    this.initData();
  }
}