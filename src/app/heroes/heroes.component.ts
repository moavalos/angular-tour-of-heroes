import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes', // elementos css para componente
  templateUrl: './heroes.component.html', // ubicacion plantilla componente
  styleUrls: ['./heroes.component.css'] // ubicacion del css privados
})

export class HeroesComponent { 
  hero: Hero = { // objeto heroe
    id: 1,
    name: 'Windstorm'
  };
  
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
    // gancho de ciclo de vida. logica de inicializacion.
  }
}
