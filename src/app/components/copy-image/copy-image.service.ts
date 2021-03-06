import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { GlobalService } from '../../Services/global.service';
import { copyImageTemplate } from './copy-imagetemplate';

@Injectable()
export class copyImageService {

  public url;

  constructor(private _globalService: GlobalService, private http: Http) {
    this.url = "http://" + this._globalService.IP + ":" + this._globalService.PORT + "/CopyImage";
  }


  postCopyImageData(imageData: copyImageTemplate) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });


    return this.http.post(this.url, JSON.stringify(imageData), options).map((res: Response) => res);
  }

  extractData(res: Response) {
    let body = res.json();
    return body;
  }



  private handleErrorObservable(error: Response | any) {
    return Observable.throw(error.json());
  }

}
