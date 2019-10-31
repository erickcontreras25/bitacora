import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BitacoraComponent } from './Bitacora/Bitacora.component';

@NgModule({
   declarations: [
      AppComponent,
      BitacoraComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
