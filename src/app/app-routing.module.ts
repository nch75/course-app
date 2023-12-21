import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { KidsComponent } from './kids/kids.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './about-us/form/form.component';
import { OverViewComponent } from './overview/over-view/over-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mens', component: MensComponent },
  { path: 'womens', component: WomensComponent },
  { path: 'kids', loadChildren: () => import('./kids/kids.module').then((m) => m.KidsModule) },
  {path: 'about-us', component:FormComponent },
  {path:'over-view', component:OverViewComponent},
  {path:'over-view-lazy', loadChildren: () => import('./over-view-lazy/over-view-lazy-routing.module').then((module) => module.OverviewLazyRoutingModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
