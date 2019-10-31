import { Component, OnInit } from '@angular/core';

import { ServiceService } from './../Service.service';

@Component({
  selector: 'app-Bitacora',
  templateUrl: './Bitacora.component.html',
  styleUrls: ['./Bitacora.component.css']
})
export class BitacoraComponent implements OnInit {

  constructor(private servi: ServiceService) { }

  ngOnInit() {
  }

  getMostrar() {
    this.servi.getApi();
  }

}
