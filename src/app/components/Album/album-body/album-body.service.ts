import { Component, Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Router , NavigationExtras } from '@angular/router';
import { GlobalService } from "../../../Services/global.service";
import { albumTemplate } from './album-template';

@Injectable()
export class albumService {
    url = "http://" + this._globalService.IP + ":" + this._globalService.PORT +"/GetImagesOfAnAlbum";

    constructor(private http: Http, private router: Router,private _globalService:GlobalService ) {

    }

    getImages(albumRequest: albumTemplate ) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, JSON.stringify(albumRequest), options).map((res: Response) => res);
    }

    public extractData(res: Response) {
        let body = res.json();
        return body;
    }

}
