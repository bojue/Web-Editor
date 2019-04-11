import { CustomBasicComponent } from './custom-basic/custom-basic.component';
import { ListComponent } from './list/list.component';
import { TreeComponent } from './tree/tree.component';
import { ChartComponent } from './chart/chart.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { TreeModule } from 'angular-tree-component';

const customComp = [
    CustomBasicComponent,
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