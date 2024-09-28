import { Routes } from '@angular/router';
import { SoulmvComponent } from './pages/soulmv/soulmv.component';
import { MvpepComponent } from './pages/mvpep/mvpep.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'soulmv', component: SoulmvComponent },
  { path: 'mvpep', component: MvpepComponent },
  // Caso não encontre uma rota, redirecionar para a página inicial
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
