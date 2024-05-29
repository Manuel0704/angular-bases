import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>
    <h3>La base es: <strong>{{ counter }}</strong></h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponent {
  public title: string = 'Counter App';
  public counter: number = 10;

  increaseBy(operator: number): void {
    this.counter += operator;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
