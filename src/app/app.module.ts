import { PositionComponent } from './communal/component/settings/position/position.component';
import { SizeComponent } from './communal/component/settings/size/size.component';
import { BasicInfoConfigService } from './providers/basic-info-config.service';
import { CompSettingComponent } from './components/settings/comp-setting.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopmentPageComponent } from './pages/development-page/development-page.component';
import { OpeacityComponent } from './communal/component/settings/opeacity/opeacity.component';
import { ColorComponent } from './communal/component/settings/color/color.component';
import { ImgComponent } from './communal/component/basic/img/img.component';
import { TextComponent } from './communal/component/basic/text/text.component';
import { BackgroundComponent } from './communal/component/settings/background/background.component';
import { AppServiceService} from './providers/app-service.service';
import { ComponentWrapperRefComponent } from './code/component/component-wrapper-ref/component-wrapper-ref.component';
import { ViewContainRefHostDirective } from './communal/directive/view-contain-ref-host.directive';
import { ChartComponent } from './communal/component/custom/chart/chart.component';
import { NgxEchartsModule } from 'ngx-echarts';

const ENTRY_COMPONENT = [
  ChartComponent,
  CompSettingComponent,
  TextComponent,
  ImgComponent
]

@NgModule({
  declarations: [
    AppComponent,
    DevelopmentPageComponent,
    OpeacityComponent,
    ColorComponent,
    ImgComponent,
    TextComponent,
    BackgroundComponent,
    CompSettingComponent,
    ComponentWrapperRefComponent,
    ViewContainRefHostDirective,
    SizeComponent,
    PositionComponent,
    ChartComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule
  ],
  providers: [
    AppServiceService,
    BasicInfoConfigService
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    ...ENTRY_COMPONENT
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
