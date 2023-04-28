import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes', // elementos css para componente
  templateUrl: './heroes.component.html', // ubicacion plantilla componente
  styleUrls: ['./heroes.component.css'] // ubicacion del css privados
})

export class HeroesComponent { 
  
  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit() {
    // gancho de ciclo de vida. logica de inicializacion.
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
