import { CompTemplateModule } from './component/comp-dev/template/comp-template.module';
import { CompEventModule } from './component/comp-dev/event/comp-event.module';
import { CompStyleModule } from './component/comp-dev/style/comp-style.module';
import { CompDataModule } from './component/comp-dev/data/comp-data.module';
import { CompEmitService } from './providers/comp-emit.service';
import { BasicInfoConfigService } from './providers/basic-info-config.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { AppServiceService} from './providers/app-service.service';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { CodeModule } from './code/code.module';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { CompDevModule } from './component/comp-dev/comp-dev.module';
import { CompViewModule } from './component/comp-view/comp-view.module';
import { CompSettingBasicModule } from './component/comp-basic/comp-setting-basic.module';
import { CompBasicModule } from './component/comp-dev/basic/comp-basic.module';

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
    CompBasicModule
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
