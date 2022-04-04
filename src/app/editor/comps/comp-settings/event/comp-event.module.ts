import { RouteEventComponent } from "./route-event/route-event.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CompSettingBasicModule } from "../../comp-basic/comp-setting-basic.module";
import { CodeModule } from "src/app/core/code.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

const styleComp = [
    RouteEventComponent,
]

@NgModule({
  declarations: [
      [...styleComp]
  ],
  imports: [
    CodeModule,
    FormsModule,
    CommonModule,
    CompSettingBasicModule
  ],
  exports: [
    [...styleComp]
  ],
  providers: [

  ],
  bootstrap: [],
  entryComponents:[
    [...styleComp]
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompEventModule { }