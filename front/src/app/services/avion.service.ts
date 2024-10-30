import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvionService {

  constructor(private http: HttpClient) { }

  getAvions = () => this.http.get(`http://localhost:3000/avions`);

  deleteAvion = (idAvion: string) => this.http.delete(`http://localhost:3000/avions/${idAvion}`);

}
