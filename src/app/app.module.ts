import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routing.module";
import { NgxEchartsModule } from "ngx-echarts";
import { CommonModule } from "@angular/common";
import { CodeModule } from "./code/code.module";
import { PagesModule } from "./pages/pages.module";
import { CompSettingBasicModule } from "./component/basic/comp-setting-basic.module";
import { CompDevModule } from "./component/dev/comp-dev.module";
import { CompViewModule } from "./component/view/comp-view.module";
import { CompBasicModule } from "./component/dev/basic/comp-basic.module";
import { AppServiceService } from "./providers/app-service.service";
import { BasicInfoConfigService } from "./providers/basic-info-config.service";
import { CompEmitService } from "./providers/comp-emit.service";

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
    CompViewModule,
    CompBasicModule,
  ],
  providers: [
    AppServiceService,
    BasicInfoConfigService,
    CompEmitService
  ],
  bootstrap: [AppComponent],
  entryComponents:[
 
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
