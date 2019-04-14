import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppComponent } from "src/app/app.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AuxiliaryComponent } from "./tool/auxiliary/auxiliary.component";
import { CompStyleModule } from "./style/comp-style.module";
import { CompEventModule } from "./event/comp-event.module";
import { CompTemplateModule } from "./template/comp-template.module";
import { CompCustomModule } from "./custom/comp-custom.module";
import { CompDataModule } from "./data/comp-data.module";
import { CompSettingBasicModule } from '../basic/comp-setting-basic.module';

@NgModule({
  declarations: [
    AuxiliaryComponent,
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
    FormsModule,
    BrowserModule,
    CompStyleModule,
    CompDataModule,
    CompCustomModule,
    CompEventModule,
    CompTemplateModule,
    CompSettingBasicModule,
    AuxiliaryComponent
  ],
  bootstrap: [
      
  ],
  entryComponents:[
    AuxiliaryComponent,    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompDevModule { }
