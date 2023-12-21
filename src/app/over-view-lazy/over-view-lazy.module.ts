import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewLazyRoutingModule } from './over-view-lazy-routing.module';
import { OverViewLazyComponent } from './over-view-lazy.component';



@NgModule({
  declarations: [
    OverViewLazyComponent
  ],
  imports: [
    CommonModule,
    OverviewLazyRoutingModule
  ]
})
export class OverViewLazyModule { }
