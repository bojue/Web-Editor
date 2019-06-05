import { Component } from "@angular/core";
import { BasicComponent } from "../../../components/comp-basic/comps/tool/area/node_modules/src/app/component/dev/basic/basic/basic.component";
import { SettingObjComponent } from "../../../components/comp-basic/comps/tool/auxiliary/node_modules/src/app/module/setting-object.component";

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent extends BasicComponent implements SettingObjComponent {
  inputBool : boolean;
  statue: any;

  constructor() {
    super();
  }

  ngOnInit() {
    this.initData();
  }

  inputState(event) {
    this.settingObj['editeabled'] = true;
  }


}
