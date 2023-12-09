import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapacityComponent } from './capacity.component';

const routes: Routes = [{ path: '', component: CapacityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapacityRoutingModule { }
