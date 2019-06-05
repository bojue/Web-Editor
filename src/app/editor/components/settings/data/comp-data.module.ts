import { UploaderComponent } from "./uploader/uploader.component";
import { ButtonValComponent } from "./button-val/button-val.component";
import { TextValComponent } from "./text-val/text-val.component";
import { TextareaValComponent } from "./textarea-val/textarea-val.component";
import { InputValComponent } from "./input-val/input-val.component";
import { ImgValComponent } from "./img-val/img-val.component";
import { ListValComponent } from "./list-val/list-val.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AudioValComponent } from "./audio-val/audio-val.component";
import { VideoValComponent } from "./video-val/video-val.component";
import { BrowserModule } from "@angular/platform-browser";
import { CompSettingBasicModule } from "src/app/editor/dev/comp-basic/comp-setting-basic.module";

const dataComp = [
    UploaderComponent,
    ButtonValComponent,
    TextValComponent,
    TextareaValComponent,
    InputValComponent,
    ImgValComponent,
    ListValComponent,
    AudioValComponent,
    VideoValComponent
]

@NgModule({
  declarations: [
      [...dataComp]
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CompSettingBasicModule
  ],
  exports: [
    [...dataComp]
  ],
  providers: [

  ],
  bootstrap: [],
  entryComponents:[
    [...dataComp]
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompDataModule { }