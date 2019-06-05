import { DynamicComponentServiceService } from '../../../provider/dynamic-component-service.service';
import { TabsTempComponent } from '../advanced/tabs-temp/tabs-temp.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


const templateComp = [
    TabsTempComponent,
]

@NgModule({
  declarations: [
      [...templateComp]
  ],
  imports: [
    FormsModule,
    BrowserModule,
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