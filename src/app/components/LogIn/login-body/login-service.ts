import { Component, Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Router , NavigationExtras } from '@angular/router';
import { logIn } from './login-template';
import { GlobalService } from "../../../Services/global.service";


@Injectable()
export class logInService {
    url = "http://" + this._globalService.IP + ":" + this._globalService.PORT +"/LogIn";

    constructor(private http: Http, private router: Router,private _globalService:GlobalService) {

    }

    postLogInO(logInData: logIn) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, JSON.stringify(logInData), options);
    }

    public extractData(res: Response) {
        let body = res.json();
        return body;
    }

    /*
    private handleErrorObservable(error: Response | any) {
        //console.error(error.message || error);
        return Observable.throw(error.message || error);
    }*/

}
