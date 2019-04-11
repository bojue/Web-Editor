import { CompDataModule } from './component/data/comp-data.module';
import { CompEmitService } from './providers/comp-emit.service';
import { PositionComponent } from './component/settings/position/position.component';
import { SizeComponent } from './component/settings/size/size.component';
import { BasicInfoConfigService } from './providers/basic-info-config.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { AppServiceService} from './providers/app-service.service';
import { NgxEchartsModule } from 'ngx-echarts';
import { AuxiliaryComponent } from './component/tool/auxiliary/auxiliary.component';
import { FormsModule } from '@angular/forms';
import { CodeModule } from './code/code.module';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { CompBasicModule } from './component/basic/comp-basic.module';
import { CompSettingModule } from './component/settings/comp-setting.module';
import { CompCustomModule } from './component/custom/comp-custom.module';

@NgModule({
  declarations: [
    AppComponent,
    AuxiliaryComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CodeModule,
    PagesModule,
    CompBasicModule
  ],
  providers: [
    AppServiceService,
    BasicInfoConfigService,
    CompEmitService
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    AuxiliaryComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
