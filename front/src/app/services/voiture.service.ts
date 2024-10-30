import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http: HttpClient) { }

  getVoitures = () => this.http.get(`http://localhost:3000/voitures`);

  deleteVoiture = (idVoiture: string) => this.http.delete(`http://localhost:3000/voitures/${idVoiture}`);

}
