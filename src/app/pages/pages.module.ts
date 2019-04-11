import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { PreviewComponent } from './preview/preview.component';
import { ConfigsComponent } from './configs/configs.component';


@NgModule({
  declarations: [
    PreviewComponent,
    HomeComponent,
    DetailComponent,
    ConfigsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [

  ],
  bootstrap: [],
  entryComponents:[
 
  ],
  exports: [

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PagesModule { }
