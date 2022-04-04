import { NgModule, CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA} from "@angular/core";
import { PageRoutingModule } from "./pages.routing.modules";
import { WorkspaceModule } from './workspace/workspace.module';
import { CommonModule } from "@angular/common";
import { HomeComponent } from './home/home.component';
import { CodeModule } from '../core/code.module';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    PageRoutingModule,
    WorkspaceModule,
    CommonModule,
    CodeModule,
    RouterModule
  ],
  providers: [
  ],
  bootstrap: [],
  entryComponents:[

  ],
  exports: [

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA]
})
export class PagesModule { }
