import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class Order {
 
  products: { name: any;}[] = [];
 
}