import { Component, OnInit } from '@angular/core';
import { Hero } from '../dominio/modelo/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes', // elementos css para componente
  templateUrl: './heroes.component.html', // ubicacion plantilla componente
  styleUrls: ['./heroes.component.css'] // ubicacion del css privados
})

export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { } // inyeccion de dependencia

  ngOnInit() {
    // gancho de ciclo de vida. logica de inicializacion.
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes); //pasa el arreglo emitida a la devolución de llamada, que establece la propiedad 'heroes' del componente.
  }

  // Cuando addHero() se guarda correctamente, la devolución de llamada subscribe() recibe el nuevo héroe y lo empuja a la lista de "héroes" para mostrarlo.
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }


}
