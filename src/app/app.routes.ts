import { RouterModule, Routes } from '@angular/router';
import { LoginBodyComponent } from './components/LogIn/login-body/login-body.component';
import { SignupBodyComponent } from './components/SignUp/signup-body/signup-body.component';
import { AboutBodyComponent } from './components/About/about-body/about-body.component';

const app_routes: Routes = [
  { path: 'login', component: LoginBodyComponent },
  { path: 'signup', component: SignupBodyComponent },
  { path: 'about', component: AboutBodyComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const app_routing = RouterModule.forRoot(app_routes);
