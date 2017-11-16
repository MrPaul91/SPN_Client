import { Component, OnInit } from '@angular/core';
import { insertAlbumService} from "./insert-album.service";
import { GlobalService } from "../../Services/global.service";
import { imageAlbumRequestTemplate } from "./insert-albumRequestTemplate";
import { BootstrapAlertService } from 'ng2-alert-service/bootstrap-alert.service';


@Component({
  selector: 'app-insert-album',
  templateUrl: './insert-album.component.html'
})
export class InsertAlbumComponent implements OnInit {

  public message: string;
  data: any;
   
  insertAlbumObject = new imageAlbumRequestTemplate();
  constructor(private _globalService: GlobalService, private insertAlbumService: insertAlbumService,
     private bootstrapAlertService: BootstrapAlertService ) { }

  ngOnInit() {

    this.insertAlbumObject.sessionId = this._globalService.Session.sessionId;
    this.insertAlbumObject.username = this._globalService.Session.user.username;
  }

  postAlbumData(){
    
    this.insertAlbumService.postInsertAlbumData(this.insertAlbumObject)
    .subscribe(result => {
      this.data = result.json();
      this.message = this.data.message;
      this.showSuccesfulMessage();
    },
      error=>{
        var result = this.insertAlbumService.extractData(error);
        this.message = result.error;
        this.showErrorMessage();
      }
    );
    
  }


  showErrorMessage() {
    this.bootstrapAlertService.showError(this.message);
  }

  showSuccesfulMessage() {
    this.bootstrapAlertService.showSucccess(this.message);
  }

}
