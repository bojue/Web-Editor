import { ImgValComponent } from './img-val/img-val.component';
import { InputValComponent } from './input-val/input-val.component';
import { TextareaValComponent } from './textarea-val/textarea-val.component';
import { TextValComponent } from './text-val/text-val.component';
import { ButtonValComponent } from './button-val/button-val.component';
import { UploaderComponent } from './uploader/uploader.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ListValComponent } from './list-val/list-val.component';
import { DataBasicComponent } from '../../comp-basic/data-basic/data-basic.component';
import { CompSettingBasicModule } from '../../comp-basic/comp-setting-basic.module';

const dataComp = [
    UploaderComponent,
    ButtonValComponent,
    TextValComponent,
    TextareaValComponent,
    InputValComponent,
    ImgValComponent,
    ListValComponent
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