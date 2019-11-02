import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividades } from 'src/Actividades';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

constructor(private http: HttpClient) { }

getApi() {
  return this.http.get('http://localhost:5000/api/Category');
}

postApi(actividad: Actividades) {
  return this.http.post('http://localhost:5000/api/Category', actividad);
}

}
