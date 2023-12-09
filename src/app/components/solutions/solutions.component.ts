import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';
import { Detail } from '@services/detail.service';
@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})

export class SolutionsComponent implements OnInit {
  categories:any;
  clients:any;
  products:any=[];
  product:any={};
  info: { name: string; description: string; moduless: string; } = {
    name: 'Nombre inicial',
    description: 'Descripción inicial',
    moduless: 'Módulos iniciales'
  };
  constructor(
    public infoDetail: Detail,
    public router: Router,
    public yeoman:Yeoman,
    public dataApiService: DataApiService
  ) { 
    this.getAllProducts();
    this.yeoman.products = [];
  }
  getAllProducts(){
    
    this.dataApiService.getAllProducts().subscribe(response=>{
      this.yeoman.allProducts=response;
    });
  }
   setPreview(i:any){
    this.info=this.yeoman.allProducts[i];
    this.infoDetail.info=this.info,
    this.router.navigate(['/solutionsdetail']);
  }
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
