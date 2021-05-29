import { Component, OnInit, Input } from "@angular/core";
import { Pokemon } from "./pokemon.model";
import { PokemonCard } from "./pokemon-card.model";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input()
  cardData: PokemonCard;

  pokemon: Pokemon;
  defaultImageSrc = "../../assets/pokeball.png"; // obrazek defaultowy [../../assets/pokeball.png]
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<any>(this.cardData.url)
    .subscribe(Response => {

      this.pokemon = {
      name: Response.name,
      type: Response.types[0].type.name,
      imageUrl: Response.sprites.front_default,
      polishType: this.translateTypeName(Response.types[0].type.name)
      };
    });
  }
  translateTypeName(type: string): string { // tłumaczenie typów pokemonów
    switch(type) {
      case "normal":
        return "NORMALNY";
      case "fire":
        return "OGNISTY";
      case "water":
        return "WODNISTY";
      case "electric":
        return "ELEKTRYCZNY";
      case "grass":
        return "TRAWIASTY";
      case "ice":
        return "LODOWY";
      case "fighting":
        return "WALCZĄCY";
      case "poison":
        return "TRUJĄCY";
      case "ground":
        return "ZIEMISTY";
      case "flying":
        return "LATAJĄCY";
      case "psychic":
        return "PSYCHICZNY";
      case "bug":
        return "ROBAK";
      case "rock":
        return "SKALNY";
      case "ghost":
        return "DUCH";
      case "dragon":
        return "SMOK";
      case "dark":
        return "MROK";
      case "steel":
        return "STALOWY";
      case "fairy":
        return "BAŚNIOWY"
      default:
        return "niezidentyfikowany"
    }
  }
  }


