import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-voiture',
  standalone: true,
  imports: [NgFor],
  templateUrl: './voiture.component.html',
  styleUrl: './voiture.component.css'
})
export class VoitureComponent {
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

}
