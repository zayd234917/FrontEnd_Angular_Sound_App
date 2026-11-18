import { Routes } from '@angular/router';
import {LoginComponent} from '../features/auth/login.component/login.component';
import {Home} from '../features/home/home';
import { authGuard } from '../core/auth.guard';
export const routes: Routes = [
   {path :'',   loadComponent: () => import('../features/auth/login.component/login.component').then(m => m.LoginComponent)},
   {path :'login',   loadComponent: () => import('../features/auth/login.component/login.component').then(m => m.LoginComponent)},
   {path :'home',   loadComponent: () => import('../features/home/home').then(m => m.Home)},
   {path :'tracks',
      canActivate: [authGuard],   
      loadChildren: () => import('../features/tracks/track.routes').then(m => m.TRACKS_ROUTES)},
];
