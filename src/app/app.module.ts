import { CompEmitService } from './providers/comp-emit.service';
import { PositionComponent } from './component/settings/position/position.component';
import { SizeComponent } from './component/settings/size/size.component';
import { BasicInfoConfigService } from './providers/basic-info-config.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { DevelopmentPageComponent } from './pages/develop/development';
import { OpeacityComponent } from './component/settings/opeacity/opeacity.component';
import { ColorComponent } from './component/settings/color/color.component';
import { ImgComponent } from './component/basic/img/img.component';
import { TextComponent } from './component/basic/text/text.component';
import { BackgroundComponent } from './component/settings/background/background.component';
import { AppServiceService} from './providers/app-service.service';
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
import { ListComponent } from './component/custom/list/list.component';
import { BorderComponent } from './component/settings/border/border.component';
import { FormsModule } from '@angular/forms';
import { CodeModule } from './code/code.module';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { CompBasicModule } from './component/basic/comp-basic.module';
import { CompSettingModule } from './component/settings/comp-setting.module';

const ENTRY_COMPONENT = [
  ChartComponent,
  CompSettingComponent,
  CompListComponent,
  AuxiliaryComponent,
  TreeComponent,
  ListComponent
]

const SETTING_COMPONENT = [

]

const EVENT_COMPONENT = [
  UploaderComponent
]

const TOOL_COMPONENT = [
  AuxiliaryComponent
]

const DATA_COMPONENT = [
  DataBasicComponent,
  ButtonValComponent,
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
    CompListComponent,
    CompViewComponent,
    ViewContainRefHostDirective,
    SettingBasicComponent,
    CustomBasicComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule,
    CommonModule,
    CodeModule,
    PagesModule,
    CompBasicModule,
    CompSettingModule,
    TreeModule.forRoot()
  ],
  providers: [
    AppServiceService,
    BasicInfoConfigService,
    CompEmitService
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    ...ENTRY_COMPONENT
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
