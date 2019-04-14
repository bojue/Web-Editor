import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TabsTempComponent } from './tabs-temp/tabs-temp.component';
import { TempBasicComponent } from './temp-basic/temp-basic.component';

const templateComp = [
    TabsTempComponent,
    TempBasicComponent
]

@NgModule({
  declarations: [
      [...templateComp]
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports: [
    [...templateComp]
  ],
  providers: [

  ],
  bootstrap: [],
  entryComponents:[
    [...templateComp]
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompTemplateModule { }