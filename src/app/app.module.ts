import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeBoxComponent } from './components/poke-box/poke-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonsComponent,
    PokeListComponent,
    PokeCardComponent,
    PokeBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
