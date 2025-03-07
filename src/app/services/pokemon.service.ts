import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _urlBase: string = "https://pokeapi.co/api/v2/pokemon";
  private _httpClient: HttpClient;

  constructor(httpClient: HttpClient){
    this._httpClient = httpClient;
  }

  public getList(): Observable<any>{
    return this._httpClient.get(this._urlBase);
  }
}
