import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CamionService {

  constructor() { }
  camions = [
    {
      name: "camion",
      img: "camion.jpg",
      description: "Camion"
    }
  ]

  // création de méthodes Observable
  getCamions(): Observable<any[]> {
    return of(this.camions);
  }
}
