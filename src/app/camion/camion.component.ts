import { Component } from '@angular/core';
import { CamionService } from '../services/camion.service';

@Component({
  selector: 'app-camion',
  standalone: true,
  imports: [],
  templateUrl: './camion.component.html',
  styleUrl: './camion.component.css'
})
export class CamionComponent {
  camions: any;

  constructor(private serviceCamions: CamionService) {

  }

  ngOnInit() {
    this.getCamions();
  }

  getCamions() {
    this.serviceCamions.getCamions().subscribe(data => {
      this.camions = data;
    })
  }
}
