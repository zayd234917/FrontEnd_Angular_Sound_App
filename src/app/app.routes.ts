import { Routes } from '@angular/router';
import {LoginComponent} from '../features/auth/login.component/login.component';
import {Home} from '../features/home/home';
export const routes: Routes = [
   {path :'login',   loadComponent: () => import('../features/auth/login.component/login.component').then(m => m.LoginComponent)},
   {path :'home',   loadComponent: () => import('../features/home/home').then(m => m.Home)}
];
