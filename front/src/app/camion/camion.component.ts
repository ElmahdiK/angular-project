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

  constructor(private serviceCamions: CamionService) { }

  getCamions = () => this.serviceCamions.getCamions().subscribe(data => this.camions = data);

  deleteCamion = (idCamion: string) => this.serviceCamions.deleteCamion(idCamion).subscribe(() => {
    this.getCamions();

    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  });

}