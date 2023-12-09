import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionsdetailRoutingModule } from './solutionsdetail-routing.module';
import { SolutionsdetailComponent } from './solutionsdetail.component';
import { DataApiService } from '@app/services/data-api.service';
import { Yeoman } from '@app/services/yeoman.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SolutionsdetailComponent
  ],
  imports: [
    CommonModule,
    SolutionsdetailRoutingModule,
    HttpClientModule
  ],
  providers:[DataApiService, Yeoman]
})
export class SolutionsdetailModule { }
