import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class categoryFilter
 { categorySelected: { id: string; name: any } = { id: "c0", name: null };
  filtered:boolean=false;
}