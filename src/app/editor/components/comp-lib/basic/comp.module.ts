import { ButtonComponent } from "./button/button.component";
import { SelectComponent } from "./select/select.component";
import { TextComponent } from "./text/text.component";
import { ImgComponent } from "./img/img.component";
import { InputComponent } from "./input/input.component";
import { TextareaComponent } from "./textarea/textarea.component";
import { LineComponent } from "./line/line.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { VideoComponent } from './video/video.component';
import { SwiperComponent } from "./swiper/swiper.component";
import { CodeModule } from '../../../../core/code.module';

const basicComp = [
    ButtonComponent,
    SelectComponent,
    TextComponent,
    ImgComponent,
    InputComponent,
    TextareaComponent,
    LineComponent,
    VideoComponent,
    SwiperComponent
]

@NgModule({
  declarations: [
      [...basicComp]
  ],
  imports: [
    CodeModule,
  ],
  exports: [
    [...basicComp]
  ],
  providers: [

  ],
  bootstrap: [],
  entryComponents:[
    [...basicComp]
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompBasicModule { }