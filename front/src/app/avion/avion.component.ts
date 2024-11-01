import { Component } from '@angular/core';
import { AvionService } from '../services/avion.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-avion',
  standalone: true,
  imports: [NgClass],
  templateUrl: './avion.component.html',
  styleUrl: './avion.component.css'
})
export class AvionComponent {
  avions: any;
  showMessage: boolean = false;
  details = { name:"", description:"", img:"" };

  constructor(private serviceAvions: AvionService) { }

  ngOnInit() {
    this.getAvions();
  }

  getAvions = () => this.serviceAvions.getAvions().subscribe(data => this.avions = data);

  getStockDisponible = () => this.avions.filter((avion: any) => avion.disponibilite).length;
  
  afficher = (idElement: string)  => {
    let result = this.avions.filter((element: any) => element.id === idElement);
    this.details.name = result[0].name;
    this.details.description = result[0].description;
    this.details.img = result[0].img;
  }

  /*
  deleteAvion = (idAvion: string) => this.serviceAvions.deleteAvion(idAvion).subscribe(() => {
    this.avions = this.avions.filter((item: { id: string; }) => item.id != idAvion);
    console.log(`${idAvion} : Deleted successful`);
  })
  */

  supprimer = (idAvion: string) => this.serviceAvions.deleteAvion(idAvion).subscribe(() => {
    this.getAvions();

    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  });

  modifier = (idAvion: string, disponibilite: boolean) => this.serviceAvions.updateAvion(idAvion, disponibilite).subscribe(() => {
    this.getAvions();
  });

}