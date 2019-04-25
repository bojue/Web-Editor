import { ChartComponent } from "./chart/chart.component";
import { TreeComponent } from "./tree/tree.component";
import { ListComponent } from "./list/list.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgxEchartsModule } from "ngx-echarts";
import { CompSettingBasicModule } from "src/app/component/basic/comp-setting-basic.module";
import { TreeModule } from "angular-tree-component";
import { EquipmentDataInfoComponent } from './equipment-data-info/equipment-data-info.component';
import { BulletedComponent } from './bulleted/bulleted.component';
import { GaugeComponent } from './gauge/gauge.component';
import { ThermometerComponent } from './thermometer/thermometer.component';

const customComp = [
    ChartComponent,
    TreeComponent,
    ListComponent,
    EquipmentDataInfoComponent,
    BulletedComponent,
    GaugeComponent,
    ThermometerComponent
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