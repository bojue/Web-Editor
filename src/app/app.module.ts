import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { TreeModule } from 'angular-tree-component';
import { NgxEchartsModule } from "ngx-echarts";
import { CodeModule } from "./core/code.module";
import { AppService } from "./providers/app.service";
import { CompConfigService } from "./editor/provider/comp-config.service";
import { EmitSubService } from "./providers/emit-sub.service";
import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

const routes: Routes = [
  { path: '', loadChildren:"./pages/pages.module#PagesModule"}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    CommonModule,
    NgxEchartsModule,
    CodeModule,
    TreeModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppService,
    CompConfigService,
    EmitSubService,
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    
  ],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
