import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Yeoman {
  categorySelected:any={"id":""};
  
filtered=false;
  view:string='grid';
  preview:any={};
  user:any;
  all:any=[];
  allProducts:any=[];
  existencias:any=[];
  existenciasSize:number=0;
  allCategoriesSize:number=0;
  allClientsSize:number=0;
  virtualRoute:any="dashboard";
  pop:Boolean=false;
  data:any={};
  idCategoryFiltered:string="";
  products:any={};
  product:any={};
  categories:any=[];
  category:any={};
  filteredModules:any=[];
  allcategory:any=[];
  integration:any={};
  allintegration:any=[];
  clients:any={};
  client:any={};
  allclient:any=[];
  testimony:any=[];
  alltestimony:any=[];
  rubro:any={};
  allrubro:any=[];
  modules:any;
  allModules:any;
  currency:number=1;
  config: {
    clientSelected:number;
  } = {clientSelected:-1} ;
  origin: {
    name: string;
    restUrl: string;
    GQLUrl: string;
  } = {
    name: "default",
    restUrl: "https://db.sombrasdeangel.com:9042",
    GQLUrl: "<origin GQL url>",
  };
  constructor() {}
}
