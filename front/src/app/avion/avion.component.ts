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

  constructor(private serviceAvions: AvionService) { }

  ngOnInit() {
    this.getAvions();
  }

  getAvions = () => this.serviceAvions.getAvions().subscribe(data => this.avions = data);

  /*
  deleteAvion = (idAvion: string) => this.serviceAvions.deleteAvion(idAvion).subscribe(() => {
    this.avions = this.avions.filter((item: { id: string; }) => item.id != idAvion);
    console.log(`${idAvion} : Deleted successful`);
  })
  */

  deleteAvion = (idAvion: string) => this.serviceAvions.deleteAvion(idAvion).subscribe(() => {
    this.getAvions();

    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  });

}