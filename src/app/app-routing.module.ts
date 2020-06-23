import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatsmondialesComponent } from './contenu-principal/contenu-principal-centre/statsmondiales/statsmondiales.component';
import { AnnoncesComponent } from './contenu-principal/contenu-principal-centre/annonces/annonces.component';
import { ContenuPrincipalCentreComponent } from './contenu-principal/contenu-principal-centre/contenu-principal-centre.component';
import { FaqComponent } from './contenu-principal/contenu-principal-centre/faq/faq.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: ContenuPrincipalCentreComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'statsmondiales', component: StatsmondialesComponent },
  { path: 'annonces', component: AnnoncesComponent }
]; 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
