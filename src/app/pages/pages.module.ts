import { CompCustomModule } from './../component/custom/comp-custom.module';
import { CompDataModule } from './../component/data/comp-data.module';
import { CompSettingModule } from './../component/settings/comp-setting.module';
import { ViewContainRefHostDirective } from './../directive/view-contain-ref-host.directive';
import { CompSettingComponent } from './develop/comp-setting/comp-setting.component';
import { CompListComponent } from './develop/comp-list/comp-list.component';
import { DevelopmentPageComponent } from './develop/development';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { PreviewComponent } from './preview/preview.component';
import { ConfigsComponent } from './configs/configs.component';

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
    CompSettingModule,
    CompDataModule,
    CompCustomModule,
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
