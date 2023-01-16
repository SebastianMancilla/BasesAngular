import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>

        <h3>
        La Base es: <strong>{{ base }}</strong>
        </h3>

        <button (click)="acumular(base)">+ {{ base }}</button>

        <h1>{{ numero }}</h1>

        <button (click)="acumular(-base)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
    title: string = 'Contador APP';
    numero: number = 10;
    base: number = 5;
  
    acumular( valor: number){
      this.numero += valor;
    }
 }
