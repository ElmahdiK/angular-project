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

  constructor(private serviceVoitures: VoitureService) { }

  ngOnInit() {
    this.getVoitures();
  }

  getVoitures = () => this.serviceVoitures.getVoitures().subscribe(data => this.voitures = data);

  deleteVoiture = (idVoiture: string) => this.serviceVoitures.deleteVoiture(idVoiture).subscribe(() => {
    this.getVoitures();

    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  });
}
