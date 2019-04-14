import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CompSettingBasicModule } from "../comp-basic/comp-setting-basic.module";

@NgModule({
  declarations: [

  ],
  imports: [
    FormsModule,
    BrowserModule,
    CompSettingBasicModule
  ],
  providers: [

  ],
  bootstrap: [
      
  ],
  entryComponents:[

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompViewModule { }
