import { Component, OnInit } from '@angular/core';
import { BootstrapAlertService } from 'ng2-alert-service/bootstrap-alert.service';
import { logInService } from './login-service';
import { logIn } from './login-template';
import { GlobalService } from "../../../Services/global.service";
import { Router } from '@angular/router';
import { sessionTemplate } from './sessiontemplate';
@Component({
  selector: 'app-login-body',
  templateUrl: './login-body.component.html',
  styles: []
})
export class LoginBodyComponent implements OnInit {

  public login = new logIn();
  public message:string;
  data: any;
  constructor(private loginService: logInService, private bootstrapAlertService: BootstrapAlertService,private router: Router,private _globalService:GlobalService ) { }

  ngOnInit() {
  }

  postLogInData(): void {
      this.loginService.postLogInO(this.login).subscribe(
        res=>{
          this.data = res;
          let session = new sessionTemplate(this.data);
          this.message = session.message;

          

          /*ASIGNACION ATRIBUTOS SESSION*/

          this._globalService.initializeSession(session);
          



        

          this.showSuccesfulMessage();
          this.router.navigateByUrl('/albumcollection')

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
