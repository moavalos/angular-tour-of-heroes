import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  // un subject es una fuente de valores observables como un Observable.
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  //el método ngOnInit() filtra los searchTerms observables a través de una secuencia de operadores RxJS que reducen el número de llamadas searchHeroes(), en última instancia, devuelve un observable de resultados de búsqueda de héroes oportunos(cada uno un Héroe[]).
  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(

      // esperar 300 ms después de cada pulsación de tecla antes de considerar el término
      debounceTime(300),

      // ignorar el nuevo término si es el mismo que el anterior. asegura que una solicitud se envíe solo si el texto del filtro cambió.
      distinctUntilChanged(),

      // cambiar a una nueva búsqueda observable cada vez que cambia el término
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}