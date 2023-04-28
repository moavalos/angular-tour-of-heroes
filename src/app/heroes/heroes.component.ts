import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes', // elementos css para componente
  templateUrl: './heroes.component.html', // ubicacion plantilla componente
  styleUrls: ['./heroes.component.css'] // ubicacion del css privados
})

export class HeroesComponent { 
  
  selectedHero?: Hero;
  heroes = Hero[];

  constructor(private heroService: HeroService) { } // inyeccion de dependencia

  ngOnInit() {
    // gancho de ciclo de vida. logica de inicializacion.
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes); //pasa el arreglo emitida a la devolución de llamada, que establece la propiedad 'heroes' del componente.
  }


}
