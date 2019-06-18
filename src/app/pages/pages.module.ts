import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { PreviewComponent } from "./preview/preview.component";
import { DevelopmentPageComponent } from "./develop/development";
import { HomeComponent } from "./home/home.component";
import { DetailComponent } from "./detail/detail.component";
import { CompListComponent } from "./develop/comp-list/comp-list.component";
import { CompSettingComponent } from "./develop/comp-setting/comp-setting.component";
import { ViewContainRefHostDirective } from "../editor/directive/view-contain-ref-host.directive";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ViewChildContainRefHostDirective } from "../editor/directive/view-child-contain-ref-host.directive";
import { CompTempComponent } from './develop/comp-temp/comp-temp.component';
import { CompPageComponent } from './develop/comp-page/comp-page.component';
import { CompConfigurationComponent } from './develop/comp-configuration/comp-configuration.component';
import { CompDevModule } from "../editor/components/comp-dev.module";
import { CompStyleModule } from "../editor/components/comp-settings/style/comp-style.module";
import { CompDataModule } from "../editor/components/comp-settings/data/comp-data.module";
import { CompBusinessModule } from "../editor/components/comp-lib/business/comp-business.module";
import { CompEventModule } from "../editor/components/comp-settings/event/comp-event.module";
import { CompSettingBasicModule } from "../editor/components/comp-basic/comp-setting-basic.module";
import { TreeModule } from 'ng2-tree';

@NgModule({
  declarations: [
    PreviewComponent,
    DevelopmentPageComponent,
    HomeComponent,
    DetailComponent,
    CompListComponent,
    CompSettingComponent,
    ViewContainRefHostDirective,
    ViewChildContainRefHostDirective,
    CompTempComponent,
    CompPageComponent,
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
    CompSettingBasicModule,
    TreeModule
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
