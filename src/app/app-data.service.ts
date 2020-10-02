import { Injectable } from '@angular/core';
import {Observable, throwError, Subject} from 'rxjs';

interface courseObject{
  Course: string;
  Section: string;
  CRN: string;
  Credit: string;
  MeetWeekDay: Array<string>;
  TimeSpan: Array<Array<string>>;
  Location: Array<string>;
}

interface newStatus{
  status: string,
  data: courseObject
}

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  operation: newStatus;

  constructor() { }

  private favCourseStream = new Subject<newStatus>();

  newFavCourse$ = this.favCourseStream.asObservable();

  UpdateFavCourse(){
    this.favCourseStream.next(this.operation);
  }

}
