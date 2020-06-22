import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { BarreDeNavigationComponent } from './barre-de-navigation/barre-de-navigation.component';
import { ContenuPrincipalComponent } from './contenu-principal/contenu-principal.component';
import { ContenuPrincipalGaucheComponent } from './contenu-principal/contenu-principal-gauche/contenu-principal-gauche.component';
import { ContenuPrincipalCentreComponent } from './contenu-principal/contenu-principal-centre/contenu-principal-centre.component';
import { ContenuPrincipalDroiteComponent } from './contenu-principal/contenu-principal-droite/contenu-principal-droite.component';
import { MesuresComponent } from './contenu-principal/contenu-principal-centre/mesures/mesures.component';
import { StatsmondialesComponent } from './contenu-principal/contenu-principal-centre/statsmondiales/statsmondiales.component';
import { AnnoncesComponent } from './contenu-principal/contenu-principal-centre/annonces/annonces.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ChiffresParPaysComponent } from './chiffres-par-pays/chiffres-par-pays.component';
import { ResultatRecherchePaysComponent } from './chiffres-par-pays/resultat-recherche-pays/resultat-recherche-pays.component';
import { ChoixMetierComponent } from './contenu-principal/contenu-principal-centre/annonces/choix-metier/choix-metier.component';
import { ResultatAnnoncesComponent } from './contenu-principal/contenu-principal-centre/annonces/resultat-annonces/resultat-annonces.component';
import { ChiffresFranceComponent } from './chiffres-france/chiffres-france.component';
import { ApiStatistiquesService } from './api-statistiques.service';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { ApiUtilisateursService } from './api-utilisateurs.service';
import { LoginComponent } from './header/login/login.component';
import { RegisterComponent } from './/header/register/register.component';
import { MessageService } from './message.service';
import { ApiAnnoncesService } from './api-annonces.service';
import { AjouterAnnonceComponent } from './contenu-principal/contenu-principal-centre/annonces/ajouter-annonce/ajouter-annonce.component';
import { SessionService } from './session.service';

import { Globals } from './variablesGlobales/globals';
import { ChiffresDepartementsComponent } from './chiffres-departements/chiffres-departements.component';
import { ChatComponent } from './contenu-principal/contenu-principal-droite/chat/chat.component';
import { ApiChatService } from './api-chat.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, NgxPaginationModule, NgxChartsModule, BrowserAnimationsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, BarreDeNavigationComponent, ContenuPrincipalComponent, ContenuPrincipalGaucheComponent, ContenuPrincipalCentreComponent, ContenuPrincipalDroiteComponent, MesuresComponent, StatsmondialesComponent, AnnoncesComponent, ChiffresParPaysComponent, ResultatRecherchePaysComponent, ChoixMetierComponent, ResultatAnnoncesComponent, ChiffresFranceComponent,  ScrollTopComponent, LoginComponent, RegisterComponent, AjouterAnnonceComponent, ChiffresDepartementsComponent, ChatComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ApiStatistiquesService, DatePipe, ApiUtilisateursService, MessageService, ApiAnnoncesService, SessionService, Globals, ApiChatService]
})
export class AppModule { }
