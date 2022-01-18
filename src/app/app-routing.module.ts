import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjetsComponent} from './projets/projets.component';
import {ProjetComponent} from "./projet/projet.component";

const routes: Routes = [
  {
    path: '',
    component: ProjetsComponent
  },
  {
    path: 'projets',
    component: ProjetsComponent
  },
  {
    path: 'projet/:id',
    component: ProjetComponent
  },
  { path: '',   redirectTo: 'projets', pathMatch: 'full' },
  { path: '**', component: ProjetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
