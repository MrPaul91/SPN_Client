import { Component, OnInit } from '@angular/core';
import { BootstrapAlertService } from 'ng2-alert-service/bootstrap-alert.service';
import { ToastMessageModel } from 'ng2-alert-service/toast-message-component/toast-message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    constructor(private bootstrapAlertService: BootstrapAlertService) {

  }

  messageList: ToastMessageModel[] = [];

  ngOnInit() {
      this.bootstrapAlertService.getAlertEvent().subscribe(r => {
        this.messageList.push(r);
      });
  }
}
