import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// indican al enrutador que vista mostrar cuando un usuario hace clic en un enlace o pega una url
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent }
  // coincidir la url con path: heroes y mostrar heroesComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // el metodo configura el enrutador.
  // proporciona proveedores de servicvios y directivas para enrutamiento
  exports: [RouterModule]
})
export class AppRoutingModule { }
