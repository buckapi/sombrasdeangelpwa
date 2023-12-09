import { Component, OnInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';
import { Butler } from '@services/butler.service';
import { categoryFilter } from '@app/services/categoryFilter.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients:any;
  categories:any;
  category: any= [];
   
   selectedCategory:any;
  constructor(
    public categoryFilter: categoryFilter,
    public yeoman: Yeoman,
    public dataApiService: DataApiService,
    public _butler:Butler
  ) {
    this.getAll();
    this.loadCategories();
   }
    setClient(i:any){
     let indice= i;
     this.dataApiService.getAllClient().subscribe(
      response => {
        this.clients = response;}
      )
    }
   getAll(){ 
    this.dataApiService.getAllClient().subscribe(response=> {
      this.yeoman.allclient=response;
      this.yeoman.allclient = this.yeoman.allclient.map((client:any) => {
        // Agregar "c" a la propiedad 'id' de cada objeto
        client.idNew = 'c' + client.idCategory;
        return client;
      });
    });
   
  }

      loadCategories() {
      this.dataApiService.getAllCategory().subscribe(
        (response: any) => { // Asegúrate de que response sea del tipo correcto
          this.categories = response;
    
          // Ordena las categorías por la propiedad 'name'
          this.categories.sort((a: any, b: any) => a.name.localeCompare(b.name));
        },
        error => {
         
        }
      );
    }

  setCategory(i: any) {
    this.categoryFilter.categorySelected.id="c"+this.categories[i].id;
   
    this.categoryFilter.filtered=true;
}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
