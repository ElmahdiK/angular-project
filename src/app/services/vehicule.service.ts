import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor() { }
  vehicules = [
    {
      name: "vehicule",
      img: "vehicule.jpg",
      description: "Vehicule"
    }
  ]

  // création de méthodes Observable
  getVehicules(): Observable<any[]> {
    return of(this.vehicules);
  }
}
