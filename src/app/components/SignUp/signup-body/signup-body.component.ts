import { Component, OnInit } from '@angular/core';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import { GlobalService } from "../../../Services/global.service";
import { SignupService } from '../../../Services/signup.service';
import { SignUp } from './signup-template';
import { Avatar } from './Avatar';

@Component({
  selector: 'app-signup-body',
  templateUrl: './signup-body.component.html',
  styles: []
})

export class SignupBodyComponent implements OnInit {

  public signUp = new SignUp();
  public message: String;
  public showMessage: Boolean = false;

  constructor(private _globalService:GlobalService, private _signupService:SignupService) {
    console.log('http://'+this._globalService.IP + ':'+this._globalService.PORT);
  }

  ngOnInit() {
  }

  postSignUpData(){
    this._signupService.postSignUpService(this.signUp)
    .subscribe(message => {
        this.message = <any>message;
        this.showMessage = true;
    });
  }

  resizeOptions: ResizeOptions = {
    resizeMaxHeight: 128,
    resizeMaxWidth: 128
  };

  selected(imageResult: ImageResult) {
    var text = imageResult.dataURL;
    this.signUp.avatar = new Avatar();
    this.signUp.avatar.file = text.replace(/^data:image\/\w+;base64,/, '');
    this.signUp.avatar.extension = '.' + text.substring(11, text.search(/;/));;
  }


}
