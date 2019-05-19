
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgxEchartsModule } from "ngx-echarts";
import { CompSettingBasicModule } from "src/app/editor/components/comp-basic/comp-setting-basic.module";
import { ChartComponent } from "src/app/editor/components/comp-lib/business/chart/chart.component";
import { TreeComponent } from "angular-tree-component";
import { ListComponent } from "src/app/editor/components/comp-lib/business/list/list.component";
import { GaugeComponent } from "src/app/editor/components/comp-lib/business/gauge/gauge.component";

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