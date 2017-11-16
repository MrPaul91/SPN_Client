import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageUploadModule } from 'ng2-imageupload';
import { HttpModule } from '@angular/http';
import { BootstrapAlertModule } from 'ng2-alert-service/bootstrap-alert.module';

//Components
import { AppComponent } from './app.component';
import { LoginBodyComponent } from './components/LogIn/login-body/login-body.component';
import { SignupBodyComponent } from './components/SignUp/signup-body/signup-body.component';
import { AlbumcolletionBodyComponent } from './components/AlbumColletion/albumcolletion-body/albumcolletion-body.component';
import { InitialnavbarComponent } from './components/Shared/initialnavbar/initialnavbar.component';
import { AboutBodyComponent } from './components/About/about-body/about-body.component';
import { AlbumBodyComponent } from './components/Album/album-body/album-body.component';
import { InsertImageComponent } from './components/insert-image/insert-image.component';
import { InsertAlbumComponent } from './components/insert-album/insert-album.component';
import { AlbumsOfOtherUserComponent } from './components/albums-of-other-user/albums-of-other-user.component';
//Routes
import { routing } from './app.routes';
import { RouterModule }   from '@angular/router';

//Services
import { GlobalService } from './Services/global.service';
import { SignupService } from './components/SignUp/signup-body/signup.service';
import { logInService } from './components/LogIn/login-body/login-service';
import { sessionTemplate } from './components/LogIn/login-body/sessiontemplate';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { albumcolletionService } from './components/AlbumColletion/albumcolletion-body/albumcolletion-service';
import { albumService } from './components/Album/album-body/album-body.service';
import { insertImageService } from "./components/insert-image/insert-image.service";
import { insertAlbumService } from './components/insert-album/insert-album.service';
import { albumOfOtherUserService } from './components/albums-of-other-user/albumofotheruser-service';
import { CopyImageComponent } from './components/copy-image/copy-image.component';
import { copyImageService } from './components/copy-image/copy-image.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginBodyComponent,
    SignupBodyComponent,
    AlbumcolletionBodyComponent,
    InitialnavbarComponent,
    AboutBodyComponent,
    AlbumBodyComponent,
    InsertImageComponent,
    InsertAlbumComponent,
    AlbumsOfOtherUserComponent,
    CopyImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ImageUploadModule,
    HttpModule,
    BootstrapAlertModule,
    routing
  ],
  providers: [
    GlobalService,
    SignupService,
    logInService,
    CookieService,
    albumcolletionService,
    albumService,
    insertImageService,
    insertAlbumService,
    albumOfOtherUserService,
    copyImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
