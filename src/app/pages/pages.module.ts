import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { PreviewComponent } from "./preview/preview.component";
import { DevelopmentPageComponent } from "./develop/development";
import { HomeComponent } from "./home/home.component";
import { DetailComponent } from "./detail/detail.component";
import { ConfigsComponent } from "./configs/configs.component";
import { CompListComponent } from "./develop/comp-list/comp-list.component";
import { CompSettingComponent } from "./develop/comp-setting/comp-setting.component";
import { ViewContainRefHostDirective } from "../directive/view-contain-ref-host.directive";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CompDevModule } from "../component/dev/comp-dev.module";
import { CompViewModule } from "../component/view/comp-view.module";
import { CompStyleModule } from "../component/dev/style/comp-style.module";
import { CompDataModule } from "../component/dev/data/comp-data.module";
import { CompCustomModule } from "../component/dev/custom/comp-custom.module";
import { CompEventModule } from "../component/dev/event/comp-event.module";
import { CompTemplateModule } from "../component/dev/template/comp-template.module";
import { CompSettingBasicModule } from "../component/basic/comp-setting-basic.module";

@NgModule({
  declarations: [
    PreviewComponent,
    DevelopmentPageComponent,
    HomeComponent,
    DetailComponent,
    ConfigsComponent,
    CompListComponent,
    CompSettingComponent,
    ViewContainRefHostDirective
  ],
  imports: [

  FormsModule,
    BrowserModule,
    CompDevModule,
    CompViewModule,
    CompStyleModule,
    CompDataModule,
    CompCustomModule,
    CompEventModule,
    CompTemplateModule,
    CompSettingBasicModule
  ],
  providers: [

  ],
  bootstrap: [],
  entryComponents:[

  ],
  exports: [

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PagesModule { }
