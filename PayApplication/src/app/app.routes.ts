import { Routes } from '@angular/router';
import { DisplayPayApplicationComponent } from './components/display-pay-application/display-pay-application.component';
import { CreatePayApplicationComponent } from './components/create-pay-application/create-pay-application.component';


export const routes: Routes = [
    { path: 'dashboard', component: DisplayPayApplicationComponent },
    { path: 'CreateApplication', component: CreatePayApplicationComponent }
];
