import { PositionComponent } from './component/settings/position/position.component';
import { SizeComponent } from './component/settings/size/size.component';
import { BasicInfoConfigService } from './providers/basic-info-config.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopmentPageComponent } from './pages/development-page/development-page.component';
import { OpeacityComponent } from './component/settings/opeacity/opeacity.component';
import { ColorComponent } from './component/settings/color/color.component';
import { ImgComponent } from './component/basic/img/img.component';
import { TextComponent } from './component/basic/text/text.component';
import { BackgroundComponent } from './component/settings/background/background.component';
import { AppServiceService} from './providers/app-service.service';
import { ComponentWrapperRefComponent } from './code/component/component-wrapper-ref/component-wrapper-ref.component';
import { ChartComponent } from './component/custom/chart/chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { BasicComponent } from './component/basic/basic/basic.component';
import { InputComponent } from './component/basic/input/input.component';
import { TextareaComponent } from './component/basic/textarea/textarea.component';
import { LineComponent } from './component/basic/line/line.component';
import { ButtonComponent } from './component/basic/button/button.component';
import { SelectComponent } from './component/basic/select/select.component';
import { RoundComponent } from './component/basic/round/round.component';
import { CompListComponent } from './pages/development-page/comp-list/comp-list.component';
import { CompSettingComponent } from './pages/development-page/settings/comp-setting.component';
import { CompViewComponent } from './pages/development-page/comp-view/comp-view.component';
import { ViewContainRefHostDirective } from './directive/view-contain-ref-host.directive';

const ENTRY_COMPONENT = [
  ChartComponent,
  TextComponent,
  ImgComponent,
  InputComponent,
  TextareaComponent,
  CompSettingComponent,
  CompListComponent
]

@NgModule({
  declarations: [
    AppComponent,
    DevelopmentPageComponent,
    CompSettingComponent,
    OpeacityComponent,
    ColorComponent,
    ImgComponent,
    TextComponent,
    BackgroundComponent,
    ComponentWrapperRefComponent,
    SizeComponent,
    PositionComponent,
    ChartComponent,
    BasicComponent,
    InputComponent,
    TextareaComponent,
    LineComponent,
    ButtonComponent,
    SelectComponent,
    RoundComponent,
    CompListComponent,
    CompViewComponent,
    ViewContainRefHostDirective
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
