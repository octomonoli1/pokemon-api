import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  public urlRandomPokemon:string = "";

  ngOnInit(): void {
    this.urlRandomPokemon = "/detail/" +  (Math.floor(Math.random() * (1025)));
  }

}
