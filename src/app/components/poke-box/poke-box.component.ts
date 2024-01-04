import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poke-box',
  template: `
    <a [routerLink]="['content', this.pokemon.id]">
      <div class="card" (click)="onPokemonClick()">
        <div class="card-img">
          <img [src]="pokemon.svg_url" alt="{{ pokemon.nome }} Image">
        </div>
        <div class="card-nome">
          <h3>{{ pokemon.nome }}</h3>
        </div>
      </div>
    </a>
  `,
  styleUrls: ['./poke-box.component.sass']
})
export class PokeBoxComponent {
  @Input() pokemon: any;

  onPokemonClick() {
    console.log('Pokemon clicado:', this.pokemon.id);
  }
}
