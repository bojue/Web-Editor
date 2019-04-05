import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopmentPageComponent } from './pages/development-page/development-page.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'develope', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'detail', component: DetailComponent},
  { path: 'develope', component: DevelopmentPageComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
