import { Component, OnInit } from '@angular/core';
import { GlobalService } from "../../../Services/global.service";

@Component({
  selector: 'app-initialnavbar',
  templateUrl: './initialnavbar.component.html',
  styles: []
})
export class InitialnavbarComponent implements OnInit {

  constructor(public _globalService:GlobalService) {

  }

  ngOnInit() {
  }

}
