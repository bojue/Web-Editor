import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopmentPageComponent } from './pages/development-page/development-page.component';
import { WidthComponent } from './communal/component/settings/width/width.component';
import { HeightComponent } from './communal/component/settings/height/height.component';
import { OpeacityComponent } from './communal/component/settings/opeacity/opeacity.component';
import { TopComponent } from './communal/component/settings/top/top.component';
import { LeftComponent } from './communal/component/settings/left/left.component';
import { RightComponent } from './communal/component/settings/right/right.component';
import { BottomComponent } from './communal/component/settings/bottom/bottom.component';
import { ColorComponent } from './communal/component/settings/color/color.component';
import { FontColorComponent } from './communal/component/settings/font-color/font-color.component';
import { FontSizeComponent } from './communal/component/settings/font-size/font-size.component';
import { FontWeightComponent } from './communal/component/settings/font-weight/font-weight.component';
import { ImgComponent } from './communal/component/basic/img/img.component';
import { TextComponent } from './communal/component/basic/text/text.component';
import { BackgroundComponent } from './communal/component/settings/background/background.component';

import { AppServiceService} from './providers/app-service.service'


@NgModule({
  declarations: [
    AppComponent,
    DevelopmentPageComponent,
    WidthComponent,
    HeightComponent,
    OpeacityComponent,
    TopComponent,
    LeftComponent,
    RightComponent,
    BottomComponent,
    ColorComponent,
    FontColorComponent,
    FontSizeComponent,
    FontWeightComponent,
    ImgComponent,
    TextComponent,
    BackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AppServiceService
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    ImgComponent,
    TextComponent
  ]
})
export class AppModule { }
