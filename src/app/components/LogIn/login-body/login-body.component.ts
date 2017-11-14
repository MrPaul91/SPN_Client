import { Component, OnInit } from '@angular/core';
import { BootstrapAlertService } from 'ng2-alert-service/bootstrap-alert.service';
import { logInService } from './login-service';
import { logIn } from './login-template';
import { GlobalService } from "../../../Services/global.service";
import { Router } from '@angular/router';
import { sessionTemplate } from './sessiontemplate';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-login-body',
  templateUrl: './login-body.component.html',
  styles: []
})
export class LoginBodyComponent implements OnInit {

  public login = new logIn();
  public message: string;
  data: any;
  constructor(private loginService: logInService, private bootstrapAlertService: BootstrapAlertService, private router: Router, private _globalService: GlobalService, private _cookieService: CookieService) { }

  ngOnInit() {
  }

  postLogInData(): void {
    this.loginService.postLogInO(this.login).subscribe(
      res => {
        this.data = res.json();
        console.log(res);
        let session = new sessionTemplate(this.data);
        console.log(session);
        this._globalService.initializeSession(session);
        this.message = this.data.message;
        this.showSuccesfulMessage();
        this.router.navigateByUrl('/albumcollection');
      },
      error => {
        var result = this.loginService.extractData(error);
        this.message = result.error;
        this.showErrorMessage();

      }
    );
  }

  showErrorMessage() {
    this.bootstrapAlertService.showError(this.message);
  }

  showSuccesfulMessage() {
    this.bootstrapAlertService.showSucccess(this.message);
  }

  getCookie(key: string) {
    return this._cookieService.get(key);
  }
}
