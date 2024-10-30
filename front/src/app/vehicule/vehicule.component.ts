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

  constructor(private serviceVehicules: VehiculeService) { }

  ngOnInit() {
    this.getVehicules();
  }

  getVehicules = () => this.serviceVehicules.getVehicules().subscribe(data => this.vehicules = data);

  deleteVehicule = (idVehicule: string) => this.serviceVehicules.deleteVehicule(idVehicule).subscribe(() => {
    this.getVehicules();

    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  });
}
