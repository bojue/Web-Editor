import { ColorComponent } from "./color/color.component";
import { SizeComponent } from "./size/size.component";
import { BackgroundComponent } from "./background/background.component";
import { PositionComponent } from "./position/position.component";
import { BorderComponent } from "./border/border.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ZIndexComponent } from './z-index/z-index.component';
import { FontsComponent } from './fonts/fonts.component';
import { OpacityComponent } from './opacity/opacity.component';
import { CodeModule } from '../../../../core/code.module';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

const settingComp = [
    ColorComponent,
    SizeComponent,
    BackgroundComponent,
    PositionComponent,
    BorderComponent,
    ZIndexComponent,
    OpacityComponent,
    FontsComponent
]

@NgModule({
  declarations: [
      [...settingComp]
  ],
  imports: [
    CodeModule,
    FormsModule,
    CommonModule
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