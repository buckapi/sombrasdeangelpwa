import { Component } from '@angular/core';
import { ScriptService } from '@app/services/script.service';
import { setTheme } from 'ngx-bootstrap/utils';
import { Router} from '@angular/router';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';
import { Detail } from '@services/detail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multisoft';
  allProducts:any;
  categories:any;
  info: { name: string; description: string; moduless: string; } = {
    name: 'Nombre inicial',
    description: 'Descripción inicial',
    moduless: 'Módulos iniciales'
  };
  constructor(
    public script: ScriptService,
    public infoDetail: Detail,
    public router: Router,
    public yeoman: Yeoman,
    public dataApiService: DataApiService
  )
  {
    this.loadCategories();
    this.script.load(
      'jquery',
      'bootstrap',
      'chosen',
      'countdown',
      'scrollbar',
      'lightbox',
      'magnific-popup',
      'slick',
      'zoom',
      'threesixty',
      'jquery-ui',
      'mobilemenu',
      'functions'
                )
          .then(data => {
            // this.yeoman.isLoaded=true;
          })
          .catch(error => console.log(error)); 
    setTheme('bs5');
  }
  setCategory(i:any){
    let indice= i;
    this.dataApiService.getAllCategory().subscribe(
     response => {
       this.categories = response;}
     )
   }  

  loadCategories() {
    this.dataApiService.getAllCategory().subscribe(
      (response: any) => { // Asegúrate de que response sea del tipo correcto
        this.categories = response;
  
        // Ordena las categorías por la propiedad 'name'
        this.categories.sort((a: any, b: any) => a.name.localeCompare(b.name));
  
       
      },
      error => {
        console.error("Error al cargar las categorías:", error);
      }
    );
  }
  setPreview(i:any){
    this.yeoman.preview=this.yeoman.allrubro[i];
    this.info=this.yeoman.allrubro[i];
  this.infoDetail.info=this.info,
    this.router.navigate(['industries']);
  }
  
 ngAfterViewInit(): void {}
}
