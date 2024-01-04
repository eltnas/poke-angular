import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.sass']
})
export class PokeCardComponent implements OnInit{
  pokeData : any[] = [];
  itens = 10
  ngOnInit() {
  }

  loadMore(){
    this.itens += 10;
  }

}
