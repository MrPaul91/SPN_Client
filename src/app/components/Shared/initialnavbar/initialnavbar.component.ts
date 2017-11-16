import { Component, OnInit } from '@angular/core';
import { GlobalService } from "../../../Services/global.service";
import { BootstrapAlertService } from 'ng2-alert-service/bootstrap-alert.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-initialnavbar',
  templateUrl: './initialnavbar.component.html',
  styles: []
})
export class InitialnavbarComponent implements OnInit {


  usernameToFind: string;

  constructor(public _globalService:GlobalService, 
              private bootstrapAlertService: BootstrapAlertService,
              private router: Router) {

  }

  ngOnInit() {
  
  }

  changeBarLogOut(){
    //console.log(this._globalService.initialNavBar);
    console.log(this._globalService.Session.user.rol);
    this._globalService.initialNavBar = false;
  }

  checkRolForSearch(){
    if(this._globalService.Session.user.rol == 'REGULAR'){
      this.bootstrapAlertService.showError("Lo sentimos no puede hacer busquedas");
    }
    else{
      this._globalService.visitandoUsuario = true;
      this.router.navigateByUrl('/albumOfOtherUser/'+this.usernameToFind);
      
    }

  }

}
