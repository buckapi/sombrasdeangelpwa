import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Router} from '@angular/router';
import { SwiperOptions } from 'swiper';
import { ScriptService } from '@app/services/script.service';
import { Yeoman } from '@app/services/yeoman.service';
import { DataApiService } from '@app/services/data-api.service';
import { Detail } from '@services/detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  clients:any;
  categories:any;
  product:any;
  
  info: { name: string; description: string; moduless: string; } = {
    name: 'Nombre inicial',
    description: 'Descripción inicial',
    moduless: 'Módulos iniciales'
  };
 
  config1: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: true,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
     autoplay: {
      delay: 2000, 
      disableOnInteraction: false, 
    },
  };
  config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: true,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
           768: {
        slidesPerView: 1
      }
    }
  };
  config2: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 2,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: true,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 800, 
      disableOnInteraction: false, 
    },
    breakpoints: {
      768: {
        slidesPerView: 6
      }
    }
  };
  config3: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 2,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: true,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 800, 
      disableOnInteraction: false, 
    },
    breakpoints: {
      768: {
        slidesPerView: 4
      }
    }
  };
  
  

  constructor(
    public infoDetail: Detail,
    public router:Router,
    public script:ScriptService,
    public yeoman:Yeoman,
    public dataApiService: DataApiService

    ) {
   
    this.loadCategories();
    this.getAllProducts();
    
     }
     
    
    
    
    setCategory(i:any){
      let indice= i;
      this.dataApiService.getAllCategory().subscribe(
       response => {
         this.categories = response;}
       )
     }
   
     loadCategories(){
       this.dataApiService.getAllCategory().subscribe(
         response => {
           this.categories = response;
          
         },
         error => {
           console.error("Error al cargar las categorías:", error);
         }
       );
     }
     getAllProducts(){
    
      this.dataApiService.getAllProducts().subscribe(response=>{
        this.yeoman.allProducts=response;
      
        
      });
    }
    
    setPreview(i:any){
    this.info.name=this.yeoman.allProducts[i].name;
    this.info.description=this.yeoman.allProducts[i].description;
    this.info.moduless=this.yeoman.allProducts[i].moduless;   
    this.infoDetail.info=this.info,
    
    // this.yeoman.preview=this.yeoman.allProducts[i];
    this.router.navigate(['/solutionsdetail']);
  }

    setRoute(par:any){
      let parametro=par;
      this.yeoman.virtualRoute=parametro;
    }
    view(id:any){
      this.yeoman.preview=this.yeoman.allProducts[id];
      this.setRoute('solutions');
    }
  

     ngAfterViewInit(): void {
      window.scrollTo(0, 0);
    }
  

}
