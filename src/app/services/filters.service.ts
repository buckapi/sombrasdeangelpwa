import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class Filter
 { idCategorySelected:string="";
  module: { id: string; name: any  } = { id: "c0", name: null};
  moduleFiltered:boolean=false;
}