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
import { CompDevModule } from '../component/comp-dev/comp-dev.module';
import { CompSettingBasicModule } from '../component/comp-basic/comp-setting-basic.module';
import { CompViewModule } from '../component/comp-view/comp-view.module';

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
