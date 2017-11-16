import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { LoginBodyComponent } from './components/LogIn/login-body/login-body.component';
import { SignupBodyComponent } from './components/SignUp/signup-body/signup-body.component';
import { AboutBodyComponent } from './components/About/about-body/about-body.component';
import { AlbumcolletionBodyComponent } from './components/AlbumColletion/albumcolletion-body/albumcolletion-body.component';
import { AlbumBodyComponent } from './components/Album/album-body/album-body.component';
import { InsertImageComponent } from './components/insert-image/insert-image.component';
import { InsertAlbumComponent } from './components/insert-album/insert-album.component';
import { AlbumsOfOtherUserComponent } from './components/albums-of-other-user/albums-of-other-user.component';
import { CopyImageComponent } from './components/copy-image/copy-image.component';

const app_routes: Routes = [
  { path: 'albumcollection', component: AlbumcolletionBodyComponent },
  { path: 'insertAlbum', component: InsertAlbumComponent},
  { path: 'login', component: LoginBodyComponent },
  { path: 'signup', component: SignupBodyComponent },
  { path: 'copyimage/:idImage', component: CopyImageComponent},
  { path: 'about', component: AboutBodyComponent },
  { path: 'album/:albumId', component: AlbumBodyComponent },
  { path: 'insertImage/:albumId', component: InsertImageComponent  },
  { path: 'albumOfOtherUser/:userToFind', component: AlbumsOfOtherUserComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(app_routes);