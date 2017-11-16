import { Component, OnInit } from '@angular/core';
import { body_albumOfOtherUser } from './body_albumofotheruser-template';
import { GlobalService } from "../../Services/global.service";
import { albumOfOtherUserTemplate } from './albumofotheruser-template';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { albumOfOtherUserService } from './albumofotheruser-service';
import { albumOfOtherUserResponseTemplate } from './albumofotheruser-responsetemplate';
import { Location } from '@angular/common';

@Component({
  selector: 'app-albums-of-other-user',
  templateUrl: './albums-of-other-user.component.html'
})

export class AlbumsOfOtherUserComponent implements OnInit {

  public AlbumsArray: body_albumOfOtherUser[];
  public AlbumSelected: body_albumOfOtherUser;
  public path: string;

  ResponseData: any;

  public albumcollectionObject = new albumOfOtherUserTemplate();


  constructor(private _globalService: GlobalService,
    private router: Router,
    private albumService: albumOfOtherUserService,
    private route: ActivatedRoute,
    private location: Location

  ) {


  }

  ngOnInit() {

      this.path = "http://" + this._globalService.IP + ':' + this._globalService.PORT;
      this.route.params.subscribe((params: Params) => {

      this.albumcollectionObject.usernameToFind = params['userToFind'];
      this.albumcollectionObject.username = this._globalService.Session.user.username;
      this.albumcollectionObject.sessionId = this._globalService.Session.sessionId;

      this.getAlbumData();

    });

  }

  getAlbumData() {

    this.albumService.getAlbums(this.albumcollectionObject).subscribe(
      res => {
        this.ResponseData = res.json();
        let albumObject = new albumOfOtherUserResponseTemplate(this.ResponseData);
        this.AlbumsArray = albumObject.Albums;
      },
      error => {
        console.log(error);
      }
    )
  }
  selectedAlbum(album: body_albumOfOtherUser): void {
    this.AlbumSelected = album;
    this.router.navigateByUrl('/album/' + this.AlbumSelected.albumId);
  }




}
