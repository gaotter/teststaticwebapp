import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{(nameMessage | async).Name}}</div>`,
})
export class AppComponent  {

  nameMessage = this.dataService.getName();
constructor(private dataService:DataService) {}



  value = 'World';
}
