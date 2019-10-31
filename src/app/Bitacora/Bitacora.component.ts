import { Component, OnInit } from '@angular/core';

import { ServiceService } from './../Service.service';
import { Categorias } from 'src/Categorias';

@Component({
  selector: 'app-Bitacora',
  templateUrl: './Bitacora.component.html',
  styleUrls: ['./Bitacora.component.css']
})
export class BitacoraComponent implements OnInit {

  categ: any;

  constructor(private servi: ServiceService) { }

  ngOnInit() {
  }

  getMostrar() {
    this.servi.getApi().subscribe(
      (data: any) => {
        this.categ = data;
        console.log(this.categ);
      }
    );
}

}
