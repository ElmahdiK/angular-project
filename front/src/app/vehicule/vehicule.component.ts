import { Component } from '@angular/core';
import { VehiculeService } from '../services/vehicule.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-vehicule',
  standalone: true,
  imports: [NgClass],
  templateUrl: './vehicule.component.html',
  styleUrl: './vehicule.component.css'
})
export class VehiculeComponent {
  vehicules: any;
  showMessage: boolean = false;
  details = { name:"", description:"", img:"" };

  constructor(private serviceVehicules: VehiculeService) { }

  ngOnInit() {
    this.getVehicules();
  }

  getVehicules = () => this.serviceVehicules.getVehicules().subscribe(data => this.vehicules = data);
  
  afficher = (idElement: string)  => {
    let result = this.vehicules.filter((element: any) => element.id === idElement);
    this.details.name = result[0].name;
    this.details.description = result[0].description;
    this.details.img = result[0].img;
  }


  getStockDisponible = () => this.vehicules.filter((item: any) => item.disponibilite).length;

  supprimer = (idVehicule: string) => this.serviceVehicules.deleteVehicule(idVehicule).subscribe(() => {
    this.getVehicules();

    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  });

  modifier = (idVehicule: string, disponibilite: boolean) => this.serviceVehicules.updateVehicule(idVehicule, disponibilite).subscribe(() => {
    this.getVehicules();
  });
}
