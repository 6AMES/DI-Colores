import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'home', component: MainComponent},
];
