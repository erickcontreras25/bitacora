import { Component, OnInit } from '@angular/core';

import { ServiceService } from './../Service.service';
import { Categorias } from 'src/Categorias';
import { Actividades } from 'src/Actividades';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'Actividades',
  templateUrl: './Actividades.component.html',
  styleUrls: ['./Actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  acts: Actividades[] = [];
  act: Actividades;
  aux: number;

  constructor(private servi: ServiceService) { }

  ngOnInit() {
    this.act = new Actividades()
  }

  getMostrar() {
    this.servi.getActi().subscribe(
      (data: Actividades[]) => {
        this.acts = data;
        console.log(this.acts);
      },
      (error) => {
        console.log('error');
      }
    );
}

agregarAct(): void {
  console.log('fehca', this.act.fecha);
  console.log('hora', this.act.horaFinal);
  this.servi.postActi(this.act).subscribe(
    (res) => {
      this.acts.push(this.act);
      //this.categ = new Categorias('');
    },
    (error) => {
      console.log(error);
    }
  );
}

actualizarAct(): void {
  console.log(this.aux);
  this.servi.putActi(this.act).subscribe(
    res => {
      this.acts.push(this.act);
    }
  );
}




eliminarAct(): void {
  console.log(this.aux);
  this.servi.deleteActi(this.aux).subscribe(
    (data: Actividades[]) => {
      this.acts = data;
    },
    (error) => {
      console.log('error');
    }
  );
  console.log('Eliminado');
}






}
