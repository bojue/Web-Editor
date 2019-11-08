import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CodeModule } from "src/app/core/code.module";
import { CompConfigService } from "src/app/editor/provider/comp-config.service";
import { CompDevModule } from "src/app/editor/components/comp-dev.module";
import { CompStyleModule } from "src/app/editor/components/comp-settings/style/comp-style.module";
import { CompDataModule } from "src/app/editor/components/comp-settings/data/comp-data.module";
import { CompBusinessModule } from "src/app/editor/components/comp-lib/business/comp-business.module";
import { CompEventModule } from "src/app/editor/components/comp-settings/event/comp-event.module";
import { CompSettingBasicModule } from "src/app/editor/components/comp-basic/comp-setting-basic.module";
import { CompListComponent } from "./comp-configuration/comp-list/comp-list.component";
import { CompSettingComponent } from "./comp-setting/comp-setting.component";
import { ViewContainRefHostDirective } from "src/app/editor/directive/view-contain-ref-host.directive";
import { ViewChildContainRefHostDirective } from "src/app/editor/directive/view-child-contain-ref-host.directive";
import { CompPageListComp } from "./comp-configuration/comp-page-list/comp-page-list.component";
import { CompConfigurationComponent } from "./comp-configuration/comp-configuration.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
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
    CompSettingBasicModule
  ],
  providers: [
    CompConfigService,
  ],
  bootstrap: [],
  entryComponents:[

  ],
  exports: [

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class DevelopModule { }
