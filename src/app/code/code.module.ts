import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BreadCurmbComponent } from './component/bread-curmb/bread-curmb.component';
import { MenuBreadCrumbService } from '../menu.breadcrumb.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DynamicComponentServiceService } from '../editor/provider/dynamic-component-service.service';

@NgModule({
  declarations: [
    BreadCurmbComponent
 ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule
  ],
  exports: [
    BreadCurmbComponent
  ],
  providers: [
    DynamicComponentServiceService,
    MenuBreadCrumbService
  ]
})
export class CodeModule { }
