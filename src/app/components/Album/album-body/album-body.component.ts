import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { GlobalService } from "../../../Services/global.service";
import { albumTemplate } from './album-template';
import { albumService } from './album-body.service';
import { body_imageTemplate } from './body_image-template';
import { albumResponseTemplate } from './albumresponse-template';

@Component({
  selector: 'app-album-body',
  templateUrl: './album-body.component.html',
  styles: []
})
export class AlbumBodyComponent implements OnInit {

  public albumObject = new albumTemplate();
  public ImageArray: body_imageTemplate[];
  public ResponseData: any;
  public path: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private _globalService: GlobalService,
    private albumService: albumService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.path = "http://" + this._globalService.IP + ':' + this._globalService.PORT;
    this.route.params.subscribe((params: Params) => {
      this.albumObject.albumId = params['albumId'];
      this.albumObject.username = this._globalService.Session.user.username;
      this.albumObject.sessionId = this._globalService.Session.sessionId;

      this.getImagesData();

    });
  }

  getImagesData() {

    this.albumService.getImages(this.albumObject).subscribe(
      res => {
        let ImageResponseObject = new albumResponseTemplate(res.json());
        this.ImageArray = ImageResponseObject.Images;
      },
      error => {
        console.log(error);
      }
    )

  }

  insertImage() {
    this.router.navigateByUrl('/insertImage/' + this.albumObject.albumId);
  }

  referenceImage(image: body_imageTemplate) {
    this.router.navigateByUrl('/copyimage/' + image.idImage);
  }

}
