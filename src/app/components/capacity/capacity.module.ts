import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapacityRoutingModule } from './capacity-routing.module';
import { CapacityComponent } from './capacity.component';


@NgModule({
  declarations: [
    CapacityComponent
  ],
  imports: [
    CommonModule,
    CapacityRoutingModule
  ]
})
export class CapacityModule { }
