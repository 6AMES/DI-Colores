import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MainJpComponent } from './main-jp/main-jp.component';
import { LoginComponent } from './login/login.component';
import { LoginJpComponent } from './login-jp/login-jp.component';
import { ProductsComponent } from './products/products.component';
import { ProductsJpComponent } from './products-jp/products-jp.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: MainComponent },
    { path: 'home-jp', component: MainJpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'login-jp', component: LoginJpComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products-jp', component: ProductsJpComponent }
];
