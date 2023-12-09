import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolutionsdetailComponent } from './solutionsdetail.component';

const routes: Routes = [{ path: '', component: SolutionsdetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionsdetailRoutingModule { }
