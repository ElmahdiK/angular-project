import { Component } from '@angular/core';
import { VoitureService } from '../services/voiture.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-voiture',
  standalone: true,
  imports: [NgClass],
  templateUrl: './voiture.component.html',
  styleUrl: './voiture.component.css'
})
export class VoitureComponent {
  voitures: any;
  showMessage: boolean = false;
  details = { name:"", description:"", img:"" };

  constructor(private serviceVoitures: VoitureService) { }

  ngOnInit() {
    this.getVoitures();
  }

  getVoitures = () => this.serviceVoitures.getVoitures().subscribe(data => this.voitures = data);

  getStockDisponible = () => this.voitures.filter((voiture: any) => voiture.disponibilite).length;

  afficherDetails = (idVoiture: string)  => {
    let result = this.voitures.filter((voiture: any) => voiture.id === idVoiture);
    this.details.name = result[0].name;
    this.details.description = result[0].description;
    this.details.img = result[0].img;
  }

  deleteVoiture = (idVoiture: string) => this.serviceVoitures.deleteVoiture(idVoiture).subscribe(() => {
    this.getVoitures();

    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  });

  updateVoiture = (idVoiture: string, disponibilite: boolean) => this.serviceVoitures.updateVoiture(idVoiture, disponibilite).subscribe(() => {
    this.getVoitures();
  });
}
