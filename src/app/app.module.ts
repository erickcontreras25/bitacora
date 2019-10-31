import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BitacoraComponent } from './Bitacora/Bitacora.component';

import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './Service.service';
import { Services } from '@angular/core/src/view';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      BitacoraComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [ServiceService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
