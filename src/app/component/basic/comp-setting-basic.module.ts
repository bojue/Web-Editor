import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BasicComponent } from "./basic/basic.component";
import { CustomBasicComponent } from "./custom-basic/custom-basic.component";
import { DataBasicComponent } from "./data-basic/data-basic.component";
import { EventBasicComponent } from "./event-basic/event-basic.component";
import { BrowserModule } from "@angular/platform-browser";
import { StyleBasicComponent } from './style-basic/style-basic.component';

const settingBasic = [
    BasicComponent,
    CustomBasicComponent,
    DataBasicComponent,
    EventBasicComponent,
    StyleBasicComponent
]

@NgModule({
  declarations: [
    [...settingBasic]
  ],
  imports: [

  FormsModule,
    BrowserModule,
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
