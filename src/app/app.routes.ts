import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MvsoulComponent } from './components/pages/mvsoul/mvsoul.component';
import { MvpepComponent } from './components/pages/mvpep/mvpep.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'soulmv', component: MvsoulComponent },
  { path: 'mvpep', component: MvpepComponent },
  // Caso não encontre uma rota, redirecionar para a página inicial
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
