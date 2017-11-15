import { Injectable } from '@angular/core';
import { sessionTemplate } from '../components/LogIn/login-body/sessiontemplate';


@Injectable()
export class GlobalService {

  initialNavBar:Boolean = false;
  IP: String ="192.168.1.66";
  PORT: String = "1337";
  Session: sessionTemplate;


  constructor() {
  }

  public initializeSession (session: sessionTemplate){
    this.Session = session;
  }
}
