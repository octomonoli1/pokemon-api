import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonDetail } from '../../models/pokemon-detail';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{

  private _location: Location;
  private _pokemonService: PokemonService;
  private _route: ActivatedRoute;
  public pokemon: PokemonDetail | undefined = undefined;
  public moves: any[] = [];

  constructor(location: Location, pokemonService: PokemonService, route: ActivatedRoute){
    this._pokemonService = pokemonService;
    this._route = route;
    this._location = location;
    
  }

  public ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get("id");

    if(id){
      this._pokemonService.getDetail(Number(id)).subscribe(
        (data:any) =>{
          this.pokemon = data;
          this.moves = data.moves;
          console.log(this.moves);
        }
      );
    }

  }

  goBack(): void {
    this._location.back();
  }

  getImageByPokemon(pokemonDetail: PokemonDetail | undefined){
    const urlImage: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";7
    return urlImage + pokemonDetail?.id + ".svg";
  }

  capitalizeFirstLetter(text: string ): string {
      return text.charAt(0).toUpperCase() + text.slice(1);
  }

}
