import { PositionComponent } from './position/position.component';
import { BorderComponent } from './border/border.component';
import { TextsComponent } from './texts/texts.component';
import { RoundComponent } from '../basic/round/round.component';
import { BackgroundComponent } from './background/background.component';
import { SizeComponent } from './size/size.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ColorComponent } from './color/color.component';
import { StyleBasicComponent } from '../../comp-basic/style-basic/style-basic.component';

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