import { Injectable } from '@angular/core';
import { sessionTemplate } from '../components/LogIn/login-body/sessiontemplate';


@Injectable()
export class GlobalService {

  initialNavBar:Boolean = false;
  IP: String ="172.32.13.48";
  PORT: String = "1337";
  Session: sessionTemplate;
  Rol: string;

  visitandoUsuario: Boolean = false;


  constructor() {
  }

  public initializeSession (session: sessionTemplate){
    this.Session = session;
  }
}
