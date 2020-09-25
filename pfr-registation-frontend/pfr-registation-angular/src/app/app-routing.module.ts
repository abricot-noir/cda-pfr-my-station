import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListeDocumentComponent} from './modules/document/liste-document/liste-document.component';
import {DocumentFormComponent} from './modules/document/document-form/document-form.component';
import {DocumentListeComponent} from './modules/document2/document-liste/document-liste.component';

const routes: Routes = [
  { path: 'utilisateur', loadChildren: './modules/utilisateur/utilisateur.module#UtilisateurModule' },
  { path: 'materiel', loadChildren: './modules/materiel/materiel.module#MaterielModule' },
  { path: 'evenement', loadChildren: './modules/evenement/evenement.module#EvenementModule'},
  {path: 'document', component: ListeDocumentComponent},
  {path: 'ajouterdocument', component: DocumentFormComponent},
  {path: 'documentListe', loadChildren: './modules/document2/document2.module#Document2Module'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// test
