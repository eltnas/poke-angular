import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  jsonData: any[] = [];
  itemsToShow = 10;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('../../assets/poke-json/poke_infos.json')
      .subscribe(
        data => {
          console.log('JSON carregado com sucesso:', data);
          this.jsonData = data;
        },
        error => {
          console.error('Erro ao carregar JSON:', error);
        }
      );
  }

  loadMore() {
    this.itemsToShow += 10;
  }

  onPokemonClick(pokemon: any) {
    console.log('Pokemon clicado:', pokemon);
  }
}
