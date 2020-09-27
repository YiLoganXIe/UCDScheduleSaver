import { Injectable } from '@angular/core';
import {Observable, throwError, Subject} from 'rxjs';

interface courseObject{
  Course: string;
  Section: string;
  CRN: string;
  Credit: string;
  MeetWeekDay: Array<string>;
  TimeSpan: Array<string>;
  Location: Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  favCourseList = [];

  constructor() { }

  private favCourseStream = new Subject<Array<courseObject>>();

  newFavCourse$ = this.favCourseStream.asObservable();

  UpdateFavCourse(){
    this.favCourseStream.next(this.favCourseList);
  }

}
