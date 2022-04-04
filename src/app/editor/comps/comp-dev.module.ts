 import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AreaComponent } from "./comp-lib/tool/area/area.component";
import { AuxiliaryComponent } from "./comp-lib/tool/auxiliary/auxiliary.component";
import { ScaleComponent } from "./comp-lib/tool/scale/scale.component";
import { CompStyleModule } from "./comp-settings/style/comp-style.module";
import { CompDataModule } from "./comp-settings/data/comp-data.module";
import { CompBusinessModule } from "./comp-lib/business/comp-business.module";
import { CompEventModule } from "./comp-settings/event/comp-event.module";
import { CompSettingBasicModule } from "./comp-basic/comp-setting-basic.module";
import { CodeModule } from "src/app/core/code.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { CompBasicModule } from "./comp-lib/basic/comp.module";

@NgModule({
  declarations: [
    AuxiliaryComponent,
    ScaleComponent,
    AreaComponent,
  ],
  imports: [
    CodeModule,
    CompStyleModule,
    CompDataModule,
    CompBasicModule,
    CompBusinessModule,
    CompEventModule,
    CommonModule,
    FormsModule,
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
