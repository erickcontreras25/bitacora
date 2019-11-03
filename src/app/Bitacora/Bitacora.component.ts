import { Component, OnInit } from '@angular/core';

import { ServiceService } from './../Service.service';
import { Categorias } from 'src/Categorias';
import { Actividades } from 'src/Actividades';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'Category',
  templateUrl: './Bitacora.component.html',
  styleUrls: ['./Bitacora.component.css']
})
export class BitacoraComponent implements OnInit {

  //actividads: Actividades[] = [];
  //actividad: Actividades;
  categs: Categorias[] = [];
  categ: Categorias;
  elimi: number;

  constructor(private servi: ServiceService) { }

  ngOnInit() {
    this.categ = new Categorias('');
  }

  getMostrar() {
    this.servi.getApi().subscribe(
      (data: Categorias[]) => {
        this.categs = data;
        console.log(this.categs);
      },
      (error) => {
        console.log('error');
      }
    );
}

  agregarCateg(): void {
    this.servi.postApi(this.categ).subscribe(
      (res) => {
        this.categs.push(this.categ);
        //this.categ = new Categorias('');
      },
      (error) => {}
    );
  }

  actualizarCateg(): void {
    console.log(this.elimi);
    this.servi.putApi(this.categ).subscribe(
      res => {
        this.categs.push(this.categ);
      }
    );
  }


  eliminarCateg(): void {
    console.log(this.elimi);
    this.servi.deleteApi(this.elimi).subscribe(
      (data: Categorias[]) => {
        this.categs = data;
      },
      (error) => {
        console.log('error');
      }
    );
    console.log('Eliminado');
  }

}
