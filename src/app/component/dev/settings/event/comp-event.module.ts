import { ClickEventComponent } from "./click-event/click-event.component";
import { DbclickEventComponent } from "./dbclick-event/dbclick-event.component";
import { RouteEventComponent } from "./route-event/route-event.component";
import { EventListComponent } from "./event-list/event-list.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CompSettingBasicModule } from "src/app/component/basic/comp-setting-basic.module";

const styleComp = [
    ClickEventComponent,
    DbclickEventComponent,
    RouteEventComponent,
    EventListComponent,
]

@NgModule({
  declarations: [
      [...styleComp]
  ],
  imports: [
    FormsModule,
    BrowserModule,
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