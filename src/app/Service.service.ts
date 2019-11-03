import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividades } from 'src/Actividades';
import { Categorias } from 'src/Categorias';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

constructor(private http: HttpClient) { }

getApi() {
  return this.http.get('http://localhost:5000/api/Category');
}

postApi(categoria: Categorias) {
  return this.http.post('http://localhost:5000/api/Category', categoria);
}

deleteApi(iden: number) {
  return this.http.delete(`http://localhost:5000/api/Category/${iden}`);
}

putApi(categoria: Categorias) {
  return this.http.put(`http://localhost:5000/api/Category/${categoria.id}`, categoria);
}



// ACTIVIDADES
getActi() {
  return this.http.get('http://localhost:5000/api/Actividad');
}
postActi(actividad: Actividades) {
  return this.http.post('http://localhost:5000/api/Actividad', actividad);
}


}
