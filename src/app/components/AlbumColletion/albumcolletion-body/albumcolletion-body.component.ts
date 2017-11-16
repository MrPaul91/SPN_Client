import { Component, OnInit } from '@angular/core';
import { GlobalService } from "../../../Services/global.service";
import { albumcollectionTemplate } from './albumcolletion-template';
import { albumcolletionService } from './albumcolletion-service';
import { albumcollectionResponseTemplate } from './albumcolletionresponse-template';
import { body_albumTemplate } from './body_album-template';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albumcolletion-body',
  templateUrl: './albumcolletion-body.component.html',
  styles: []
})
export class AlbumcolletionBodyComponent implements OnInit {

  public path: string;
  ResponseData: any;

  public albumcollectionObject = new albumcollectionTemplate();


  public AlbumsArray: body_albumTemplate[];
  public AlbumSelected: body_albumTemplate;


  constructor(private _globalService: GlobalService, private albumcollectionService: albumcolletionService, private router: Router) {
  }

  ngOnInit() {
    this._globalService.visitandoUsuario = false;
    this.path = "http://" + this._globalService.IP + ':' + this._globalService.PORT + this._globalService.Session.user.avatar;
    this.albumcollectionObject.username = this._globalService.Session.user.username;
    this.albumcollectionObject.sessionId = this._globalService.Session.sessionId;
    this.getAlbumsData();
  }

  getAlbumsData() {

    this.albumcollectionService.getAlbums(this.albumcollectionObject).subscribe(
      res => {
        this.ResponseData = res.json();
        let albumObject = new albumcollectionResponseTemplate(this.ResponseData);
        this.AlbumsArray = albumObject.Albums;
      },
      error => {
        console.log(error);
      }
    )
  }

  selectedAlbum(album: body_albumTemplate): void {
    this.AlbumSelected = album;
    this.router.navigateByUrl('/album/' + this.AlbumSelected.albumId);
  }

  createAlbum() {
    this.router.navigateByUrl('/insertAlbum');
  }

}
