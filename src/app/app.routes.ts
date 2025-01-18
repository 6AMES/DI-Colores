import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MainJpComponent } from './main-jp/main-jp.component';
import { LoginComponent } from './login/login.component';
import { LoginJpComponent } from './login-jp/login-jp.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: MainComponent },
    { path: 'home-jp', component: MainJpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'login-jp', component: LoginJpComponent }
];
