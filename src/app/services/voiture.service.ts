import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor() { }

  voitures = [
    {
      name: "ferrari",
      img: "ferrari.jpg",
      description: "Constructeur automobile italien installé à Maranello en Italie, fondée par Enzo Ferrari en 1947."
    }, {
      name: "lamborghini",
      img: "lamborghini.webp",
      description: "Constructeur automobile fondé en 1963 par l'industriel Ferruccio Lamborghini et installé à Sant'Agata Bolognese en Italie"
    }, {
      name: "bugatti",
      img: "bugatti.jfif",
      description: "Constructeur automobile français d’hyper-sportives de grand luxe appartenant à 55 % au groupe croate Rimac Automobili depuis son rachat en 2021."
    }
  ]

  // création de méthodes Observable
  getVoitures(): Observable<any[]> {
    return of(this.voitures);
  }

}
