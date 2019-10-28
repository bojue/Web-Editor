import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { PreviewComponent } from "./preview/preview.component";
import { DevelopmentPageComponent } from "./develop/development";
import { HomeComponent } from "./home/home.component";
import { CompListComponent } from "./develop/comp-configuration/comp-list/comp-list.component";
import { CompSettingComponent } from "./develop/comp-setting/comp-setting.component";
import { ViewContainRefHostDirective } from "../editor/directive/view-contain-ref-host.directive";
import { ViewChildContainRefHostDirective } from "../editor/directive/view-child-contain-ref-host.directive";
import { CompPageListComp } from "./develop/comp-configuration/comp-page-list/comp-page-list.component";
import { CompConfigurationComponent } from "./develop/comp-configuration/comp-configuration.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CompDevModule } from "../editor/components/comp-dev.module";
import { CompStyleModule } from "../editor/components/comp-settings/style/comp-style.module";
import { CompDataModule } from "../editor/components/comp-settings/data/comp-data.module";
import { CompBusinessModule } from "../editor/components/comp-lib/business/comp-business.module";
import { CompEventModule } from "../editor/components/comp-settings/event/comp-event.module";
import { CompSettingBasicModule } from "../editor/components/comp-basic/comp-setting-basic.module";

@NgModule({
  declarations: [
    PreviewComponent,
    DevelopmentPageComponent,
    HomeComponent,
    CompListComponent,
    CompSettingComponent,
    ViewContainRefHostDirective,
    ViewChildContainRefHostDirective,
    CompPageListComp,
    CompConfigurationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CompDevModule,
    CompStyleModule,
    CompDataModule,
    CompBusinessModule,
    CompEventModule,
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
