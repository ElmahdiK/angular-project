import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-voiture',
  standalone: true,
  imports: [NgFor],
  templateUrl: './voiture.component.html',
  styleUrl: './voiture.component.css'
})
export class VoitureComponent {
  voitures: any;

  constructor(private serviceVoiture: VoitureService) {
  }

  ngOnInit() {
    this.getVoitures();
  }

  getVoitures() {
    return this.serviceVoiture.getVoitures().subscribe(data => {
      this.voitures = data;
    });
  }

}
