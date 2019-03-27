import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopmentPageComponent } from './pages/development-page/development-page.component';
import { WidthComponent } from './communal/component/settings/width/width.component';
import { HeightComponent } from './communal/component/settings/height/height.component';
import { OpeacityComponent } from './communal/component/settings/opeacity/opeacity.component';
import { ColorComponent } from './communal/component/settings/color/color.component';
import { ImgComponent } from './communal/component/basic/img/img.component';
import { TextComponent } from './communal/component/basic/text/text.component';
import { BackgroundComponent } from './communal/component/settings/background/background.component';

import { AppServiceService} from './providers/app-service.service';
import { ImgSettingComponent } from './components/img-setting/img-setting.component'


@NgModule({
  declarations: [
    AppComponent,
    DevelopmentPageComponent,
    WidthComponent,
    HeightComponent,
    OpeacityComponent,
    ColorComponent,
    ImgComponent,
    TextComponent,
    BackgroundComponent,
    ImgSettingComponent,
  ],
  imports: [
    FormsModule,
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
