import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login.component';
import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from '../notfound/notfound.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../home/home.module').then(mod => mod.HomeModule),
    // loadChildren: '../home/home.module#HomeModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '404', component: NotfoundComponent
  },
  {
    path: '**', redirectTo: '404', pathMatch: 'full'
  }
];

export const AppRouterModule = RouterModule.forRoot(routes);
