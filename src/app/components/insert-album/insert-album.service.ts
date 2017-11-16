import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { GlobalService } from '../../Services/global.service';
import { imageAlbumRequestTemplate } from "./insert-albumRequestTemplate";

@Injectable()
export class insertAlbumService {

  public url;

  
  constructor(private _globalService: GlobalService ,private http:Http) {
     this.url = "http://" + this._globalService.IP + ":" + this._globalService.PORT +"/InsertAlbum";
  }


  postInsertAlbumData(AlbumRequestData:imageAlbumRequestTemplate){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.url, JSON.stringify(AlbumRequestData), options).map((res: Response) => res);
  }
  extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleErrorObservable (error: Response | any) {
    //console.error(error.message || error);
    return Observable.throw(error.json());
  }

}
