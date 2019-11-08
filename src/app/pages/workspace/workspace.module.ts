import { NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA  } from "@angular/core";
import { WorkspaceComponent } from "./workspace.component";
import { PreviewComponent } from "../../editor/view/view.component";
import { CodeModule } from "src/app/core/code.module";
import { DevelopModule } from "src/app/editor/develop/developmonet.module";
import { CompConfigService } from "src/app/editor/provider/comp-config.service";
import { WorkspaceRoutingModule } from "./workspace.routing.module";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    WorkspaceComponent,
    PreviewComponent,
  ],
  imports: [
    CodeModule,
    CommonModule,
    FormsModule,
    DevelopModule,
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
