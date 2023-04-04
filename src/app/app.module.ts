import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

const precoCombutivel = 5.79;
const kmPorLitros = 16;
const distanciaKm = 100;

const litrosConsumidos = distanciaKm / kmPorLitros;
const valorTotal = litrosConsumidos * precoCombutivel;

console.log(valorTotal);