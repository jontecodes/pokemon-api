import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getPoke();
    this.getPokeAbilities();
  }
  // getPoke(){
  //   let charmander = this._http.get('https://pokeapi.co/api/v2/pokemon/4/');
  //   charmander.subscribe(data => console.log(`${data.name}'s abilities are ${data.abilities[0].ability.name} and ${data.abilities[1].ability.name}`));
  //   charmander.subscribe(data => console.log('Here ya go!', data));

  // }
  getPokeAbilities(){
    let abilities = this._http.get('https://pokeapi.co/api/v2/ability/94/');
    abilities.subscribe(data => console.log(`${data.pokemon.length} Pokemon have the ${data.name} ability`));
  }
}
