import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    name: string = 'IronMan';
    age: number = 19;

    get nombreCapitalizado(): string{
        return this.name.toUpperCase();
    }

    getName(): string{
        return `${this.name} - ${this.age}`;
    }

    cambiarNombre():void{
        this.name = 'Spiderman';
    }

    changeAge():void{
        this.age = 25;
    }
}