import { Routes } from '@angular/router';
import { LoginComponent } from './services/login/login.component';
import { RegisterComponent } from './services/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
