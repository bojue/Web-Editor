import { ButtonComponent } from "./button/button.component";
import { SelectComponent } from "./select/select.component";
import { TextComponent } from "./text/text.component";
import { ImgComponent } from "./img/img.component";
import { InputComponent } from "./input/input.component";
import { TextareaComponent } from "./textarea/textarea.component";
import { LineComponent } from "./line/line.component";
import { BasicComponent } from "../../comp-basic/basic/basic.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

const basicComp = [
    ButtonComponent,
    SelectComponent,
    TextComponent,
    ImgComponent,
    InputComponent,
    TextareaComponent,
    LineComponent,
]

@NgModule({
  declarations: [
      [...basicComp]
  ],
  imports: [
    FormsModule,
    BrowserModule
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