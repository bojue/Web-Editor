import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routing.module";
import { TreeModule } from 'angular-tree-component';
import { NgxEchartsModule } from "ngx-echarts";
import { CommonModule } from "@angular/common";
import { PagesModule } from "./pages/pages.module";
import { CompSettingBasicModule } from "./editor/components/comp-basic/comp-setting-basic.module";
import { CompDevModule } from "./editor/components/comp-dev.module";
import { CompBasicModule } from "./editor/components/comp-lib/basic/comp.module";
import { AppService } from "./providers/app.service";
import { BasicInfoConfigService } from "./providers/basic-info-config.service";
import { CompEmitService } from "./providers/comp-emit.service";
import { CodeModule } from "./core/code.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    NgxEchartsModule,
    CommonModule,
    CodeModule,
    PagesModule,
    CompSettingBasicModule,
    CompDevModule,
    CompBasicModule,
    TreeModule.forRoot()
  ],
  providers: [
    AppService,
    BasicInfoConfigService,
    CompEmitService,
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
