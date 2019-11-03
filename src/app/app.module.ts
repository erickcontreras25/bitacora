import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BitacoraComponent } from './Bitacora/Bitacora.component';

import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './Service.service';
import { Services } from '@angular/core/src/view';
import { FormsModule } from '@angular/forms';

import { RouterModule, PreloadAllModules} from '@angular/router';
import { ActividadesComponent } from './Actividades/Actividades.component';
import { InicioComponent } from './Inicio/Inicio.component';

@NgModule({
   declarations: [
      AppComponent,
      BitacoraComponent,
      ActividadesComponent,
      InicioComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot([
         {path: '', component: InicioComponent},
         {path: 'Category', component: BitacoraComponent},
         {path: 'Actividades', component: ActividadesComponent}
      ])
   ],
   providers: [
      ServiceService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
