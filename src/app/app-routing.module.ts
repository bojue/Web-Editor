import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopmentPageComponent } from './pages/development-page/development-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'develope', pathMatch: 'full' },
  { path: 'develope', component: DevelopmentPageComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
