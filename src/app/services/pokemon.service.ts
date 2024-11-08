import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl: string = "https://pokeapi.co/api/v2/pokemon/";

  constructor(
    private http: HttpClient
  ){}

  public getPokemon(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.apiUrl);
  }
}
