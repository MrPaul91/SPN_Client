import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SignUp } from '../components/SignUp/signup-body/signup-template';
import { GlobalService } from './global.service';

@Injectable()
export class SignupService {

  public url;

  constructor(private _globalService: GlobalService ,private http:Http) {
    this.url = "http://" + this._globalService.IP + ":" + this._globalService.PORT +"/InsertUser";
  }


  postSignUpService(signUpData:SignUp){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, JSON.stringify(signUpData), options)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body;
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}
