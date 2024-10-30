import { Component } from '@angular/core';
import { CamionService } from '../services/camion.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-camion',
  standalone: true,
  imports: [NgClass],
  templateUrl: './camion.component.html',
  styleUrl: './camion.component.css'
})
export class CamionComponent {
  camions: any;
  showMessage: boolean = false;
  details = { name:"", description:"", img:"" };

  constructor(private serviceCamions: CamionService) { }

  getCamions = () => this.serviceCamions.getCamions().subscribe(data => this.camions = data);

  getStockDisponible = () => this.camions.filter((camion: any) => camion.disponibilite).length;

  afficher = (idElement: string)  => {
    let result = this.camions.filter((element: any) => element.id === idElement);
    this.details.name = result[0].name;
    this.details.description = result[0].description;
    this.details.img = result[0].img;
  }

  supprimer = (idCamion: string) => this.serviceCamions.deleteCamion(idCamion).subscribe(() => {
    this.getCamions();

    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  });

  modifier = (idCamion: string, disponibilite: boolean) => this.serviceCamions.updateCamion(idCamion, disponibilite).subscribe(() => {
    this.getCamions();
  });

}
