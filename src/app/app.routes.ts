import { RouterModule, Routes } from '@angular/router';

import { ModuleWithProviders }  from '@angular/core';
import { LoginBodyComponent } from './components/LogIn/login-body/login-body.component';
import { SignupBodyComponent } from './components/SignUp/signup-body/signup-body.component';
import { AboutBodyComponent } from './components/About/about-body/about-body.component';
import { AlbumcolletionBodyComponent } from './components/AlbumColletion/albumcolletion-body/albumcolletion-body.component';

const app_routes: Routes = [
  { path: 'albumcollection', component: AlbumcolletionBodyComponent },
  { path: 'login', component: LoginBodyComponent },
  { path: 'signup', component: SignupBodyComponent },
  { path: 'about', component: AboutBodyComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(app_routes);