import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BreadCurmbComponent } from './component/bread-curmb/bread-curmb.component';
import { MenuBreadCrumbService } from '../providers/menu.breadcrumb.service';
import { RouterModule } from '@angular/router';
import { CompDynamicCreateService } from '../editor/provider/comp-dynamic-create.service';
import { UserAgentService } from './tool/user-agent.service';
import { CommonModule } from '@angular/common';
import { BaseHttpService } from './provider/baseHttp/base-http.service';
import { HttpClientModule } from '@angular/common/http';
import { TempoToastrService } from './provider/toaster/toastr.service';
import { EmitSubService } from './emitSub/emit-sub.service';
import { IndexDBService } from './provider/indexDB/indexDB.service';
import { LocalStorageService } from './provider/localStorage/localStorage.service';
import { VariablesService } from './provider/global-variables/variables.service';

@NgModule({
  declarations: [
    BreadCurmbComponent
 ],
  imports: [

  RouterModule,
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    BreadCurmbComponent,
  ],
  providers: [
    BaseHttpService,
    CompDynamicCreateService,
    MenuBreadCrumbService,
    UserAgentService,
    TempoToastrService,
    EmitSubService,
    IndexDBService,
    LocalStorageService
  ]
})
export class CodeModule { }
