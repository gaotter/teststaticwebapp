import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  template: `<div *ngIf="nameMessage | async as message">Now {{message.name}}</div>`,
})
export class AppComponent  {

  nameMessage = this.dataService.getName();
constructor(private dataService:DataService) {}
}
