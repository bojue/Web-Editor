import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { ListComponent } from './project-list/list.component';
import { DetailComponent } from './project-detail/detail.component';

const routes: Route[] = [
  { path: '', component: ListComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'develop', loadChildren: () => import('src/app/editor/develop/developmonet.module').then(m => m.DevelopModule) },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }