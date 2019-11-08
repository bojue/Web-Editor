import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { WorkspaceComponent } from "./workspace.component";

import { PreviewComponent } from "../../editor/view/view.component";
import { CodeModule } from "src/app/core/code.module";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { DevelopModule } from "src/app/editor/develop/developmonet.module";
import { CompConfigService } from "src/app/editor/provider/comp-config.service";

@NgModule({
  declarations: [
    WorkspaceComponent,
    PreviewComponent,
  ],
  imports: [
    CodeModule,
    FormsModule,
    BrowserModule,
    DevelopModule
  ],
  providers: [
    CompConfigService,
  ],
  bootstrap: [],
  entryComponents:[

  ],
  exports: [

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class WorkspaceModule { }
