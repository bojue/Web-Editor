import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BreadCurmbComponent } from './component/bread-curmb/bread-curmb.component';
import { MenuBreadCrumbService } from '../providers/menu.breadcrumb.service';
import { RouterModule } from '@angular/router';
import { CompDynamicCreateService } from '../editor/provider/comp-dynamic-create.service';
import { UserAgentService } from './tool/user-agent.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BreadCurmbComponent
 ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    BreadCurmbComponent,
  ],
  providers: [
    CompDynamicCreateService,
    MenuBreadCrumbService,
    UserAgentService
  ]
})
export class CodeModule { }
