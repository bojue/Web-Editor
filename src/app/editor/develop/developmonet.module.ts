import { DevelopmentPageComponent } from "./development";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CompListComponent } from "./comp-configuration/comp-list/comp-list.component";
import { CompSettingComponent } from "./comp-setting/comp-setting.component";
import { ViewContainRefHostDirective } from "../directive/view-contain-ref-host.directive";
import { ViewChildContainRefHostDirective } from "../directive/view-child-contain-ref-host.directive";
import { CompPageListComp } from "./comp-configuration/comp-page-list/comp-page-list.component";
import { CompConfigurationComponent } from "./comp-configuration/comp-configuration.component";
import { CodeModule } from "src/app/core/code.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CompDevModule } from "../comps/comp-dev.module";
import { CompStyleModule } from "../comps/comp-settings/style/comp-style.module";
import { CompDataModule } from "../comps/comp-settings/data/comp-data.module";
import { CompBusinessModule } from "../comps/comp-lib/business/comp-business.module";
import { CompEventModule } from "../comps/comp-settings/event/comp-event.module";
import { CompSettingBasicModule } from "../comps/comp-basic/comp-setting-basic.module";
import { RouterModule } from "@angular/router";
import { CompConfigService } from "../provider/comp-config.service";
import { CompListService } from "../provider/comp-list.service";


const routes = [
  { path:"",component: DevelopmentPageComponent }
]

@NgModule({
  declarations: [
    DevelopmentPageComponent,
    CompListComponent,
    CompSettingComponent,
    ViewContainRefHostDirective,
    ViewChildContainRefHostDirective,
    CompPageListComp,
    CompConfigurationComponent
  ],
  imports: [
    CodeModule,
    CommonModule,
    FormsModule,
    CompDevModule,
    CompStyleModule,
    CompDataModule,
    CompBusinessModule,
    CompEventModule,
    CompSettingBasicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    CompConfigService,
    CompListService,
  ],
  bootstrap: [],
  entryComponents:[

  ],
  exports: [
    RouterModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class DevelopModule { }
