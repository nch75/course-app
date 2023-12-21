import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverViewLazyComponent } from './over-view-lazy.component';

const routes: Routes = [

    {path: '', component: OverViewLazyComponent}
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewLazyRoutingModule { }
