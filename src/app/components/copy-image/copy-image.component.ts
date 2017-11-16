import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { GlobalService } from "../../Services/global.service";
import { copyImageTemplate } from './copy-imagetemplate';
import { copyImageService } from './copy-image.service';
import { BootstrapAlertService } from 'ng2-alert-service/bootstrap-alert.service';

@Component({
  selector: 'app-copy-image',
  templateUrl: './copy-image.component.html'
})
export class CopyImageComponent implements OnInit {

  idImage: number;
  albumId: number;
  data: any;
  public message: string;

  copyImageRequestData = new copyImageTemplate();

  constructor(

    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private _globalService: GlobalService,
    private imageCopyService: copyImageService,
    private bootstrapAlertService: BootstrapAlertService
  ) { }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.copyImageRequestData.idImage = params['idImage'];
    });



  }

  copyThatImage() {
    this.copyImageRequestData.albumId = this.albumId;
    this.copyImageRequestData.username = this._globalService.Session.user.username;
    this.copyImageRequestData.sessionId = this._globalService.Session.sessionId;

    console.log(this.copyImageRequestData);

    this.imageCopyService.postCopyImageData(this.copyImageRequestData).subscribe(
      result => {
        this.data = result.json();
        this.message = this.data.message;
        this.showSuccesfulMessage();
      },
      error => {
        var result = this.imageCopyService.extractData(error);
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


