import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  private _pokemonService: PokemonService;
  public pokemons: Pokemon[] = [];

  constructor(pokemonService: PokemonService){
    this._pokemonService = pokemonService;
  }

  public ngOnInit(): void {
    this._pokemonService.getList().subscribe(
      (data:any) => {
        let {count, next, previous, results} = data;
        this.pokemons = results;
      }
    );
  }

  public getImageByPokemon(pokemon: Pokemon): string{
    const urlImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/";
    const urlSplitted = pokemon.url.split("/");
    const id = urlSplitted[urlSplitted.length - 2];

    return urlImage + "/" + id + ".gif";
  }

}
