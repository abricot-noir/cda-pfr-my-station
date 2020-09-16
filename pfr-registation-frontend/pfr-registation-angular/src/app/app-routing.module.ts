import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilMaterielComponent } from './modules/materiel/accueil-materiel/accueil-materiel.component';
import { AccueilComponent } from './modules/utilisateur/accueil/accueil.component';

import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'utilisateur', loadChildren: './modules/utilisateur/utilisateur.module#UtilisateurModule' },
  { path: 'materiel', loadChildren: './modules/materiel/materiel.module#MaterielModule' },
  { path: 'evenement', loadChildren:'./modules/evenement/evenement.module#EvenementModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
