import { ChartComponent } from "./chart/chart.component";
import { TreeComponent } from "./tree/tree.component";
import { ListComponent } from "./list/list.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgxEchartsModule } from "ngx-echarts";
import { GaugeComponent } from "./gauge/gauge.component";
import { CompSettingBasicModule } from "./node_modules/src/app/editor/components/comp-basic/comp-setting-basic.module";
import { TreeModule } from "angular-tree-component";

const customComp = [
    ChartComponent,
    TreeComponent,
    ListComponent,
    GaugeComponent,
]

@NgModule({
  declarations: [
      [...customComp]
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgxEchartsModule,
    CompSettingBasicModule,
    TreeModule.forRoot()
  ],
  exports: [
    [...customComp]
  ],
  providers: [

  ],
  bootstrap: [],
  entryComponents:[
    [...customComp]
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompCustomModule { }