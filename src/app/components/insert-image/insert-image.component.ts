import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { GlobalService } from "../../Services/global.service";
import { imageFormTemplate } from "./imageFormTemplate";
import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import { Avatar } from "../SignUp/signup-body/Avatar";
import { insertImageService } from "./insert-image.service";
import { BootstrapAlertService } from 'ng2-alert-service/bootstrap-alert.service';


@Component({
  selector: 'app-insert-image',
  templateUrl: './insert-image.component.html'
})
export class InsertImageComponent implements OnInit {
  public message: string;
  data: any;
  public createdImage = new imageFormTemplate();
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private _globalService: GlobalService,
    private router: Router,
    private _insertImageService: insertImageService,
    private bootstrapAlertService: BootstrapAlertService
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.createdImage.albumId = params['albumId'];
      this.createdImage.sessionId = this._globalService.Session.sessionId;
      this.createdImage.username = this._globalService.Session.user.username;      
    });
  }

  selected(imageResult: ImageResult) {
    var text = imageResult.dataURL;
    this.createdImage.photo = new Avatar();
    this.createdImage.photo.file = text.replace(/^data:image\/\w+;base64,/, '');
    this.createdImage.photo.extension = '.' + text.substring(11, text.search(/;/));;
  }

  postInsertImageData(){
      this._insertImageService.postInsertImageData(this.createdImage)
      .subscribe(result => {
        this.data = result.json();
        this.message = this.data.message;
        this.showSuccesfulMessage();
      },
        error=>{
          var result = this._insertImageService.extractData(error);
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
