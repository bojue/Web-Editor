import { BasicInfoConfigService } from './providers/basic-info-config.service';
import { CompSettingComponent } from './components/settings/comp-setting.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { SizeComponentComponent } from './communal/component/settings/size-component/size-component.component';
import { PositionComponentComponent } from './communal/component/settings/position-component/position-component.component';
import { BorderComponentComponent } from './communal/component/settings/border-component/border-component.component';
import { FontComponentComponent } from './communal/component/settings/font-component/font-component.component';

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
    SizeComponentComponent,
    PositionComponentComponent,
    BorderComponentComponent,
    FontComponentComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AppServiceService,
    BasicInfoConfigService
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    CompSettingComponent,
    TextComponent,
    ImgComponent
  ]
})
export class AppModule { }
