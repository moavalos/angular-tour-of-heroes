import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes', // elementos css para componente
  templateUrl: './heroes.component.html', // ubicacion plantilla componente
  styleUrls: ['./heroes.component.css'] // ubicacion del css privados
})
export class HeroesComponent {
  constructor() { }

  ngOnInit() {
    // gancho de ciclo de vida. logica de inicializacion.
  }

  hero = 'Windstorm';

}
