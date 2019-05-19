import { ChartComponent } from "./chart/chart.component";
import { TreeComponent, TreeModule } from "angular-tree-component";
import { ListComponent } from "./list/list.component";
import { GaugeComponent } from "./gauge/gauge.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgxEchartsModule } from "ngx-echarts";
import { CompSettingBasicModule } from "../../comp-basic/comp-setting-basic.module";

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