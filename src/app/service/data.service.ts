import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 

  }

  getName():Observable<any> {
    return this.http.get('/api/mgmhellow', {params:{name:'morten'}});
  }
}