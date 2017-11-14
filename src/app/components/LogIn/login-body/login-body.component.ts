import { Component, OnInit } from '@angular/core';
import { BootstrapAlertService } from 'ng2-alert-service/bootstrap-alert.service';
import { logInService } from './login-service';
import { logIn } from './login-template';

@Component({
  selector: 'app-login-body',
  templateUrl: './login-body.component.html',
  styles: []
})
export class LoginBodyComponent implements OnInit {

  public login = new logIn();
  public message:string;

  constructor(private loginService: logInService, private bootstrapAlertService: BootstrapAlertService) { }

  ngOnInit() {
  }

  postLogInData(): void {
      this.loginService.postLogInO(this.login).subscribe(
        data=>{
          var result = this.loginService.extractData(data);
          this.message = result.message;
          this.showSuccesfulMessage();

        },
        error=>{
          var result = this.loginService.extractData(error);
          this.message = result.error;
          this.showErrorMessage();

        }
      );
  }

  showErrorMessage(){
    this.bootstrapAlertService.showError(this.message);
  }

  showSuccesfulMessage(){
    this.bootstrapAlertService.showSucccess(this.message);
  }
}
