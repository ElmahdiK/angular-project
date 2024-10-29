import { Component } from '@angular/core';
import { VehiculeService } from '../services/vehicule.service';

@Component({
  selector: 'app-vehicule',
  standalone: true,
  imports: [],
  templateUrl: './vehicule.component.html',
  styleUrl: './vehicule.component.css'
})
export class VehiculeComponent {
  vehicules: any;

  constructor(private serviceVehicules: VehiculeService) {

  }

  ngOnInit() {
    this.getVehicules();
  }

  getVehicules() {
    return this.serviceVehicules.getVehicules().subscribe(data => {
      this.vehicules = data;
    })
  }
}
