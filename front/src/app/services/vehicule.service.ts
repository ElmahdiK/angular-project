import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http: HttpClient) { }

  getVehicules = () => this.http.get(`http://localhost:3000/vehicules`);

  deleteVehicule = (idVehicule: string) => this.http.delete(`http://localhost:3000/vehicules/${idVehicule}`);

}
