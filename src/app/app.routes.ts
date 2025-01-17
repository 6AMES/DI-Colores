import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MainJpComponent } from './main-jp/main-jp.component';

export const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'home', component: MainComponent},
    { path: 'home-jp', component: MainJpComponent },
];
