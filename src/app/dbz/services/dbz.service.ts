import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 5000
    },
    {
      id: uuid(),
      name: 'Piccolo',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 12000
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 13000
    },
    {
      id: uuid(),
      name: 'Goten',
      power: 11000
    }
  ];

  onNewCharacterParent(character: Character): void {
    const newCharacter: Character = character;
    newCharacter.id = uuid();

    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
