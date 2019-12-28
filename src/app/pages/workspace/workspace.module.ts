import { NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA  } from "@angular/core";
import { CodeModule } from "src/app/core/code.module";
import { CompConfigService } from "src/app/editor/provider/comp-config.service";
import { WorkspaceRoutingModule } from "./workspace.routing.module";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { ListComponent } from './project-list/list.component';
import { DetailComponent } from './project-detail/detail.component';

const comps = [
  ListComponent,
  DetailComponent
]

@NgModule({
  declarations: [
    ...comps
  ],
  imports: [
    CodeModule,
    CommonModule,
    FormsModule,
    WorkspaceRoutingModule
  ],
  providers: [
    CompConfigService,
  ],
  bootstrap: [],
  entryComponents:[
 
  ],
  exports: [
    WorkspaceRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class WorkspaceModule { }
