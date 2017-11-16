
import { Component, Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { GlobalService } from "../../Services/global.service";
import { Router, NavigationExtras } from '@angular/router';
import { albumOfOtherUserTemplate } from './albumofotheruser-template';


@Injectable()
export class albumOfOtherUserService {
    constructor(private http: Http, private router: Router, private _globalService: GlobalService) {

    }
    url = "http://" + this._globalService.IP + ":" + this._globalService.PORT + "/GetAlbumsOfOtherUser";


    getAlbums(albumcolletionRequest: albumOfOtherUserTemplate) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, JSON.stringify(albumcolletionRequest), options).map((res: Response) => res);
    }

    public extractData(res: Response) {
        let body = res.json();
        return body;
    }

}