import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AreaComponent } from "./comp-lib/tool/area/area.component";
import { AuxiliaryComponent } from "./comp-lib/tool/auxiliary/auxiliary.component";
import { ScaleComponent } from "./comp-lib/tool/scale/scale.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CompStyleModule } from "./comp-settings/style/comp-style.module";
import { CompDataModule } from "./comp-settings/data/comp-data.module";
import { CompCustomModule } from "./comp-lib/business/comp-custom.module";
import { CompEventModule } from "./comp-settings/event/comp-event.module";
import { CompTemplateModule } from "./comp-lib/advanced/comp-template.module";
import { CompSettingBasicModule } from "./comp-basic/comp-setting-basic.module";

@NgModule({
  declarations: [
    AuxiliaryComponent,
    ScaleComponent,
    AreaComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CompStyleModule,
    CompDataModule,
    CompCustomModule,
    CompEventModule,
    CompTemplateModule,
    CompSettingBasicModule
  ],
  providers: [

  ],
  exports: [    
    AuxiliaryComponent,
    ScaleComponent,
    AreaComponent,
  ],
  bootstrap: [
      
  ],
  entryComponents:[
    AuxiliaryComponent,    
    ScaleComponent,
    AreaComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompDevModule { }
