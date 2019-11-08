import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { WorkspaceComponent } from './workspace.component';

const routes: Route[] = [
  { path: '',  component: WorkspaceComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }