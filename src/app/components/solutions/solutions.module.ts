import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsRoutingModule } from './solutions-routing.module';
import { SolutionsComponent } from './solutions.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';

@NgModule({
  declarations: [
    SolutionsComponent
  ],
  imports: [
    CommonModule,
    SolutionsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[],
  providers:[
    Yeoman,DataApiService,
  ]
})
export class SolutionsModule { }
