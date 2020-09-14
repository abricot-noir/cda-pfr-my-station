import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterielRoutingModule } from './materiel-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AccueilMaterielComponent } from './accueil-materiel/accueil-materiel.component';
import { ListeMaterielComponent } from './liste-materiel/liste-materiel.component';
import { InfosMaterielComponent } from './infos-materiel/infos-materiel.component';
import { AjouterMaterielComponent } from './ajouter-materiel/ajouter-materiel.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AccueilMaterielComponent, ListeMaterielComponent, InfosMaterielComponent, AjouterMaterielComponent],
  imports: [
    CommonModule,
    MaterielRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ]
})
export class MaterielModule { }
