import { NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA  } from "@angular/core";
import { CodeModule } from "src/app/core/code.module";
import { CompConfigService } from "src/app/editor/provider/comp-config.service";
import { WorkspaceRoutingModule } from "./workspace.routing.module";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { ListComponent } from './project/project-list/list.component';
import { DetailComponent } from './project/project-detail/detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageAddComponent } from './page/page-add/page-add.component';
import { PageEditComponent } from './page/page-edit/page-edit.component';

const comps = [
  ListComponent,
  DetailComponent,
]

const enterComp = [
  PageAddComponent,
  PageEditComponent
]

@NgModule({
  declarations: [
    ...comps,
    ...enterComp
    
  ],
  imports: [
    CodeModule,
    CommonModule,
    FormsModule,
    NgbModule,
    WorkspaceRoutingModule
  ],
  providers: [
    CompConfigService,
  ],
  bootstrap: [],
  entryComponents:[
    ...enterComp
  ],
  exports: [
    WorkspaceRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class WorkspaceModule { }
