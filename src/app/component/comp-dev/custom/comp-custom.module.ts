
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { CustomBasicComponent } from '../../comp-basic/custom-basic/custom-basic.component';
import { ChartComponent } from './chart/chart.component';
import { ListComponent } from './list/list.component';
import { TreeComponent } from './tree/tree.component';
import { CompSettingBasicModule } from '../../comp-basic/comp-setting-basic.module';

const customComp = [
    ChartComponent,
    TreeComponent,
    ListComponent
]

@NgModule({
  declarations: [
      [...customComp]
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgxEchartsModule,
    CompSettingBasicModule
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