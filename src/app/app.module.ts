import { PositionComponent } from './component/settings/position/position.component';
import { SizeComponent } from './component/settings/size/size.component';
import { BasicInfoConfigService } from './providers/basic-info-config.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopmentPageComponent } from './pages/develop/development';
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
import { CompListComponent } from './pages/develop/comp-list/comp-list.component';
import { CompViewComponent } from './pages/develop/comp-view/comp-view.component';
import { ViewContainRefHostDirective } from './directive/view-contain-ref-host.directive';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CompSettingComponent } from './pages/develop/comp-setting/comp-setting.component';
import { AuxiliaryComponent } from './component/tool/auxiliary/auxiliary.component';
import { UploaderComponent } from './component/data/uploader/uploader.component';
import { ButtonValComponent } from './component/data/button-val/button-val.component';
import { DataBasicComponent } from './component/data/data-basic/data-basic.component';
import { TextValComponent } from './component/data/text-val/text-val.component';
import { TextareaValComponent } from './component/data/textarea-val/textarea-val.component';
import { InputValComponent } from './component/data/input-val/input-val.component';
import { SettingBasicComponent } from './component/settings/setting-basic/setting-basic.component';
import { TextsComponent } from './component/settings/texts/texts.component';
import { ImgValComponent } from './component/data/img-val/img-val.component';
import { PreviewComponent } from './pages/preview/preview.component';
import { TreeComponent } from './component/custom/tree/tree.component';
import { CustomBasicComponent } from './component/custom/custom-basic/custom-basic.component';
import { TreeModule } from 'angular-tree-component';

const ENTRY_COMPONENT = [
  ChartComponent,
  TextComponent,
  ImgComponent,
  InputComponent,
  TextareaComponent,
  CompSettingComponent,
  CompListComponent,
  ButtonComponent,
  AuxiliaryComponent,
  SelectComponent,
  LineComponent,
  TreeComponent
]

const SETTING_COMPONENT = [
  ColorComponent,
  SizeComponent,
  BackgroundComponent,
  RoundComponent,
  PositionComponent,
  TextsComponent,
]

const EVENT_COMPONENT = [
  UploaderComponent
]

const TOOL_COMPONENT = [
  AuxiliaryComponent
]

const DATA_COMPONENT = [
  ButtonValComponent,
  DataBasicComponent,
  TextValComponent,
  TextareaValComponent,
  InputValComponent,
  ImgValComponent,
]

@NgModule({
  declarations: [
    AppComponent,
    [...SETTING_COMPONENT],
    [...ENTRY_COMPONENT],
    [...EVENT_COMPONENT],
    [...TOOL_COMPONENT],
    [...DATA_COMPONENT],
    DevelopmentPageComponent,
    OpeacityComponent,
    BasicComponent,
    ComponentWrapperRefComponent,  
    CompListComponent,
    CompViewComponent,
    ViewContainRefHostDirective,
    HomeComponent,
    DetailComponent,
    SettingBasicComponent,
    PreviewComponent,
    CustomBasicComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule,
    TreeModule.forRoot()
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
