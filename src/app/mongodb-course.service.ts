import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable, throwError, Subject} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MongodbCourseService {
  content: any;
  constructor(private http: HttpClient) {
  }

  private newDataRequest = new Subject<string>();

  newData$ = this.newDataRequest.asObservable();

  loadNewURL(URL:string){
    this.newDataRequest.next(URL);
  }
  
  LoadCourseData(url){
    return this.http.get(url, { observe:"body", responseType: "json"});
  }
  
  LoadField(){
    return this.http.get("http://localhost:8080/api/fields", { observe:"body", responseType: "json"});
  }
}
