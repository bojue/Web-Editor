import { StyleBasicComponent } from "./style-basic/style-basic.component";
import { BasicComponent } from "./basic/basic.component";
import { CustomBasicComponent } from "./custom-basic/custom-basic.component";
import { DataBasicComponent } from "./data-basic/data-basic.component";
import { EventBasicComponent } from "./event-basic/event-basic.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TempBasicComponent } from "./temp-basic/temp-basic.component";

const settingBasic = [
    BasicComponent,
    CustomBasicComponent,
    DataBasicComponent,
    EventBasicComponent,
    StyleBasicComponent,
    TempBasicComponent
]

@NgModule({
  declarations: [
    [...settingBasic]
  ],
  imports: [

  ],
  providers: [

  ],
  exports:[
      [...settingBasic]
  ],
  bootstrap: [
      
  ],
  entryComponents:[
    [...settingBasic]
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompSettingBasicModule { }
