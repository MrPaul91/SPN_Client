import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageUploadModule } from 'ng2-imageupload';
import { HttpModule } from '@angular/http';

//Components
import { AppComponent } from './app.component';
import { LoginBodyComponent } from './components/LogIn/login-body/login-body.component';
import { SignupBodyComponent } from './components/SignUp/signup-body/signup-body.component';
import { AlbumcolletionBodyComponent } from './components/AlbumColletion/albumcolletion-body/albumcolletion-body.component';
import { InitialnavbarComponent } from './components/Shared/initialnavbar/initialnavbar.component';
import { AboutBodyComponent } from './components/About/about-body/about-body.component';
import { AlbumBodyComponent } from './components/Album/album-body/album-body.component';

//Routes
import { app_routing } from './app.routes';


//Services
import { GlobalService } from './Services/global.service';
import { SignupService } from './Services/signup.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginBodyComponent,
    SignupBodyComponent,
    AlbumcolletionBodyComponent,
    InitialnavbarComponent,
    AboutBodyComponent,
    AlbumBodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ImageUploadModule,
    HttpModule,
    app_routing
  ],
  providers: [
    GlobalService,
    SignupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
