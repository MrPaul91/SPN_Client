import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { GlobalService } from '../../Services/global.service';
import { imageFormTemplate } from "./imageFormTemplate";



@Injectable()
export class insertImageService {

  public url;

  constructor(private _globalService: GlobalService ,private http:Http) {
    this.url = "http://" + this._globalService.IP + ":" + this._globalService.PORT +"/InsertImage";
  }


  postInsertImageData(imageData:imageFormTemplate){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });


    return this.http.post(this.url, JSON.stringify(imageData), options).map((res: Response) => res);
  }

  extractData(res: Response) {
    let body = res.json();
    return body;
  }

  

  private handleErrorObservable (error: Response | any) {
    //console.error(error.message || error);
    console.log("El error es:");
    console.log(error.json());
    return Observable.throw(error.json());
  }

}
