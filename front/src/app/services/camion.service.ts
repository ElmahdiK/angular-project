import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CamionService {

  constructor(private http: HttpClient) { }

  getCamions = () => this.http.get(`http://localhost:3000/camions`);

  deleteCamion = (idCamion: string) => this.http.delete(`http://localhost:3000/camions/${idCamion}`);

  updateCamion = (idCamion: string, disponibilite: boolean) => this.http.patch(`http://localhost:3000/camions/${idCamion}`, { disponibilite });

}
