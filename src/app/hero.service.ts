import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

// participante de inyeccion de dependencia.
// la clase proporciona servicios inyectables y puede tener dependencias.

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES); // emite un valor unico, cojutno de heroes simulados
  }
}
