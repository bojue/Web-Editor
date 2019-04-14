import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ClickEventComponent } from './click-event/click-event.component';
import { DbclickEventComponent } from './dbclick-event/dbclick-event.component';
import { MouseEnterEventComponent } from './mouse-enter-event/mouse-enter-event.component';
import { MouseOverEventComponent } from './mouse-over-event/mouse-over-event.component';
import { BlurEventComponent } from './blur-event/blur-event.component';
import { FocusEventComponent } from './focus-event/focus-event.component';
import { FocusOutEventComponent } from './focus-out-event/focus-out-event.component';
import { EventListComponent } from './event-list/event-list.component';
import { RouteEventComponent } from './route-event/route-event.component';
import { EventBasicComponent } from '../../comp-basic/event-basic/event-basic.component';
import { CompSettingBasicModule } from '../../comp-basic/comp-setting-basic.module';

const styleComp = [
    ClickEventComponent,
    DbclickEventComponent,
    MouseEnterEventComponent,
    MouseOverEventComponent,
    BlurEventComponent,
    FocusEventComponent,
    RouteEventComponent,
    FocusOutEventComponent,
    EventListComponent,
]

@NgModule({
  declarations: [
      [...styleComp]
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CompSettingBasicModule

  ],
  exports: [
    [...styleComp]
  ],
  providers: [

  ],
  bootstrap: [],
  entryComponents:[
    [...styleComp]
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompEventModule { }