import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AuxiliaryComponent } from "./comps/tool/auxiliary/auxiliary.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CompStyleModule } from "./settings/style/comp-style.module";
import { CompDataModule } from "./settings/data/comp-data.module";
import { CompCustomModule } from "./comps/custom/comp-custom.module";
import { CompEventModule } from "./settings/event/comp-event.module";
import { CompTemplateModule } from "./comps/template/comp-template.module";
import { CompSettingBasicModule } from "../basic/comp-setting-basic.module";
import { ScaleComponent } from './comps/tool/scale/scale.component';
import { AreaComponent } from './comps/tool/area/area.component';

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
