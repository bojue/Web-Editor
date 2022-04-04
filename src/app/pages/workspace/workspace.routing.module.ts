import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { ListComponent } from './project/project-list/list.component';
import { DetailComponent } from './project/project-detail/detail.component';
import { ProjectAddComponent } from './project/project-add/project-add.component';
import { DevelopModule } from 'src/app/editor/develop/developmonet.module';


const routes: Route[] = [
  { path: '', component: ListComponent },
  { path: 'addProject', component: ProjectAddComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'develop', loadChildren: () => import('src/app/editor/develop/developmonet.module').then(m => m.DevelopModule) },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class WorkspaceRoutingModule { }