import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { TreeModule } from 'angular-tree-component';
import { NgxEchartsModule } from "ngx-echarts";
import { CodeModule } from "./core/code.module";
import { AppService } from "./providers/app.service";
import { CompConfigService } from "./editor/provider/comp-config.service";
import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from "@angular/common";
import { CompStorageLocalService } from './editor/provider/comp-storage-local.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PageAddComponent } from './pages/workspace/page/page-add/page-add.component';
import { PageEditComponent } from './pages/workspace/page/page-edit/page-edit.component';

const routes: Routes = [
  { path: '', loadChildren:() => import('./pages/pages.module').then(m => m.PagesModule)}
]

@NgModule({
  declarations: [
    AppComponent,
    PageAddComponent,
    PageEditComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    CommonModule,
    NgxEchartsModule,
    CodeModule,
    TreeModule.forRoot(),
    RouterModule.forRoot(routes),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added

  ],
  providers: [
    AppService,
    CompConfigService,
    CompStorageLocalService,
    {
      provide:LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    PageAddComponent,
    PageEditComponent
  ],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
