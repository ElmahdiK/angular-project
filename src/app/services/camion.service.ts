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
      description: "Avec une large gamme de powertrains et une gamme encore plus large de modèles, il existe un camion Volvo adapté à votre activité."
    },{
      name:"semi tesla",
      img: "tesla.jpg",
      description:"Le Semi de Tesla est un camion semi-remorque entièrement électrique avec des caractéristiques de sécurité actives, une autonomie considérable."
    }
  ]

  // création de méthodes Observable
  getCamions(): Observable<any[]> {
    return of(this.camions);
  }
}
