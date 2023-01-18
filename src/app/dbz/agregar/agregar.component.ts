import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    name: 'Trunks',
    power: 14000
  }

  constructor(private dbzService: DbzService) { }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter;

  agregar() {
    if (this.nuevo.name.trim().length === 0) {
      return;
    }

    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      name: '',
      power: 0
    }
  }
}
