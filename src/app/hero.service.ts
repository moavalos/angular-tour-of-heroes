import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// participante de inyeccion de dependencia.
// la clase proporciona servicios inyectables y puede tener dependencias.

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes'); // envia un mensaje cuando se envien los heroes
    return of(HEROES); // emite un valor unico, cojutno de heroes simulados
  }
}