import { DynamicComponentServiceService } from '../../../provider/dynamic-component-service.service';
import { TabsTempComponent } from "./tabs-temp/tabs-temp.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "./node_modules/src/app/editor/components/comp-lib/avd/node_modules/@angular/core";
import { FormsModule } from "./node_modules/src/app/editor/components/comp-lib/avd/node_modules/@angular/forms";
import { BrowserModule } from "./node_modules/src/app/editor/components/comp-lib/avd/node_modules/@angular/platform-browser";

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