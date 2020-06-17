import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatsmondialesComponent } from './contenu-principal/contenu-principal-centre/statsmondiales/statsmondiales.component';
import { AnnoncesComponent } from './contenu-principal/contenu-principal-centre/annonces/annonces.component';
import { ContenuPrincipalCentreComponent } from './contenu-principal/contenu-principal-centre/contenu-principal-centre.component';
import { MesuresComponent } from './contenu-principal/contenu-principal-centre/mesures/mesures.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: ContenuPrincipalCentreComponent },
  { path: 'mesures', component: MesuresComponent },
  { path: 'statsmondiales', component: StatsmondialesComponent },
  { path: 'annonces', component: AnnoncesComponent }
]; 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
