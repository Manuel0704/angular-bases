import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public deleteCharacterById: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public characterList: Character[] = []

  deleteById(idCharacter: string): void {
    this.deleteCharacterById.emit(idCharacter);
  }
}
