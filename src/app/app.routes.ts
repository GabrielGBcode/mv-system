import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MvsoulComponent } from './components/pages/mvsoul/mvsoul.component';
import { MvpepComponent } from './components/pages/mvpep/mvpep.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'MV Sistemas' },
  { path: 'soulmv', component: MvsoulComponent, title: 'MVSoul' },
  { path: 'mvpep', component: MvpepComponent, title: 'MVPEP' },
  // Caso não encontre uma rota, redirecionar para a página inicial
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
