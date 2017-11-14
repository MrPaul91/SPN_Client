import { Component, OnInit } from '@angular/core';
import { GlobalService } from "../../../Services/global.service";

@Component({
  selector: 'app-albumcolletion-body',
  templateUrl: './albumcolletion-body.component.html',
  styles: []
})
export class AlbumcolletionBodyComponent implements OnInit {

  public path:string;

  constructor(private _globalService:GlobalService) {
    this.path = "http://" + this._globalService.IP +':'+this._globalService.PORT +this._globalService.Session.user.avatar;
    console.log(this.path);
   }

  ngOnInit() {
    console.log(this._globalService.Session);
  }

}
