import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Detail {
  info: { name: string; description: string; moduless: string; } = {
    name: '',
    description: '',
    moduless: ''
  };
  

  constructor() {}
}
