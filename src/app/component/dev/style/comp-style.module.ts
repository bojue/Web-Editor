import { ColorComponent } from "./color/color.component";
import { SizeComponent } from "./size/size.component";
import { BackgroundComponent } from "./background/background.component";
import { RoundComponent } from "../basic/round/round.component";
import { PositionComponent } from "./position/position.component";
import { TextsComponent } from "./texts/texts.component";
import { BorderComponent } from "./border/border.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

const settingComp = [
    ColorComponent,
    SizeComponent,
    BackgroundComponent,
    RoundComponent,
    PositionComponent,
    TextsComponent,
    BorderComponent
]

@NgModule({
  declarations: [
      [...settingComp]
  ],
  imports: [
    FormsModule,
    BrowserModule,

  ],
  exports: [
    [...settingComp]
  ],
  providers: [

  ],
  bootstrap: [],
  entryComponents:[
    [...settingComp]
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompStyleModule { }