import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonDetail } from '../../models/pokemon-detail';
import { Move } from '../../models/move';
import { MoveService } from '../../services/move.service';
import { Pokemon } from '../../models/pokemon';
import { Type } from '../../models/type';
import { TypeService } from '../../services/type.service';
import { Ability } from '../../models/ability';
import { AbilityService } from '../../services/ability.service';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{

  private _location: Location;
  private _pokemonService: PokemonService;
  private _moveService: MoveService;
  private _typeService: TypeService;
  private _abilityService: AbilityService;
  private _route: ActivatedRoute;
  private _router: Router;
  public pokemon: PokemonDetail | null = null;
  public moves: Move[] = [];
  public types: Type[] = [];
  public abilities: Ability[] = [];
  public id: number = 0;

  constructor(location: Location, pokemonService: PokemonService, route: ActivatedRoute, moveService: MoveService, typeService: TypeService, abilityService: AbilityService, router: Router){
    this._pokemonService = pokemonService;
    this._route = route;
    this._location = location;
    this._moveService = moveService;
    this._typeService = typeService;
    this._abilityService = abilityService;
    this._router = router;
    
  }

  public ngOnInit(): void {
    let idParam = this._route.snapshot.paramMap.get("id");
    if(idParam){
      this.id = Number(idParam);
    }

    if(this.id){
      this._pokemonService.getDetail(this.id).subscribe(
        (data:any) => this.pokemon = data
      );

      //Obtener las habilidades
      this.pokemon?.abilities.forEach(
        (data:any)=>{
          this._abilityService.getDetail(data.ability.url).subscribe(
            (data:any)=>{
              const ability: Ability = data;
              ability.name = this.getNameByLanguage(data.names, 'es');
              ability.desc = this.getDescByLanguage(data.flavor_text_entries, 'es');
              this.abilities.push(ability);
              console.log(ability);
            }
          );
          
        }
      );

      //Obtener los tipos
      this.pokemon?.types.forEach(
        (data:any)=>{
          this._typeService.getDetail(data.type.url).subscribe(
            (data:any) =>{
              const type: Type = data;
              type.name = this.getNameByLanguage(data.names,'es');
              type.image = this.getTypeImageById(type.id);
              this.types.push(type);
            }
          )
          
        }
      );

      //Obtener los movimientos
      this.pokemon?.moves.forEach(
        (data:any) => {
          this._moveService.getDetail(data.move.url).subscribe(
            (data:any) => {
              const move: Move = data;
              move.name = this.getNameByLanguage(data.names, 'es');
              move.desc = this.getDescByLanguage(data.flavor_text_entries, 'es');
              this.moves.push(move);
            }
          )
        }
      );
    }

  }

  getTypeImageById(id: number): string{
    const urlImageType = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/xd/";

    return urlImageType + id + ".png";
  }

  //Traduccion del nombre del movimiento al español
  getNameByLanguage(names: string[], language: string): string{
    let result = "";
    names.forEach((name:any)=>{
      if(name.language.name == language){
        result = name.name;
      }
    });
    return result;
  }

  //Traduccion del efecto del movimiento al español
  getDescByLanguage(names: string[], language: string): string{
    let result = "";
    names.forEach((flavor_text:any)=>{
      if(flavor_text.language.name == language){
        result = flavor_text.flavor_text;
      }
    });
    return result;
  }

  goBack(): void {
    this._location.back();
  }

  goPrev(): string {
    return "/detail/" + (this.id - 1);
  }

  goNext(): string {
    return "/detail/" + (this.id + 1);
  }

  getImageByPokemon(pokemonDetail: PokemonDetail, shiny: boolean = false){
    let urlImage: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
    if(shiny){
      urlImage += "shiny/"
    }
    return urlImage + pokemonDetail?.id + ".png";
  }

  capitalizeFirstLetter(text: string ): string {
      return text.charAt(0).toUpperCase() + text.slice(1);
  }

}
