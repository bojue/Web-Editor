import { DynamicComponentServiceService } from '../../../provider/dynamic-component-service.service';
import { TabsTempComponent } from "./tabs-temp/tabs-temp.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "./node_modules/src/app/editor/components/comp-lib/adv/node_modules/src/app/editor/components/comp-lib/avd/node_modules/@angular/coree
import { FormsModule } from "./node_modules/src/app/editor/components/comp-lib/adv/node_modules/src/app/editor/components/comp-lib/avd/node_modules/@angular/formss
import { BrowserModule } from "./node_modules/src/app/editor/components/comp-lib/adv/node_modules/src/app/editor/components/comp-lib/avd/node_modules/@angular/platform-browserr

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