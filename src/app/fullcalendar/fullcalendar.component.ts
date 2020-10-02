import { AppDataService } from './../app-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent ,CalendarOptions, CalendarApi } from '@fullcalendar/angular'; // useful for typechecking
import { ArrayType } from '@angular/compiler';
import { WeekDay } from '@angular/common';

interface courseObject{
  Course: string;
  Section: string;
  CRN: string;
  Credit: string;
  MeetWeekDay: Array<string>;
  TimeSpan: Array<Array<string>>;
  Location: Array<string>;
}

interface event{
  id: string,
  title: string,
  date: string
}

@Component({
  selector: 'app-fullcalendar',
  templateUrl: './fullcalendar.component.html',
  styleUrls: ['./fullcalendar.component.css']
})
export class FullcalendarComponent implements OnInit {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  courseEvents: Array<event>= [];
  customEvents: Array<event> = [
    { id:"0", title: 'event 1', date: '2020-09-29' },
    { id:"1", title: 'event 2', date: '2020-09-30' }
  ];
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: []
  };

  constructor(private service: AppDataService) { 
    this.service.newFavCourse$.subscribe(
      operation =>{
        this.updateEvents(operation.status, operation.data);
      }
    )
  }

  ngOnInit(): void {
  }
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
  updateEvents(op, data:courseObject){
    let firstDayofInstruction = new Date(2020, 8, 30);
    let instructionEnds = new Date(2020, 11, 11);
    let api = this.calendarComponent.getApi();
    if(op == "+"){
      for(let i = 0; i < data.MeetWeekDay.length; i++){      
        let m_weekDay = [];
        for(let j = 0; j<data.MeetWeekDay[i].length; j++){
          switch(data.MeetWeekDay[i][j]){
            case "M" :
              m_weekDay.push(1);
              break;
            case "T" :
              m_weekDay.push(2);
              break;
            case "W" :
              m_weekDay.push(3);
              break;
            case "R" :
              m_weekDay.push(4);
              break;
            case "F" :
              m_weekDay.push(5);
              break;
          }
        }
        let m_startTime = data.TimeSpan[i][0];
        let m_endTime = new Date();
        //m_startTime.setHours(this.getHour(data, i, true));
        //m_endTime.setHours(this.getHour(data, i, false));
        api.addEvent({daysOfWeek: m_weekDay, id:data.CRN, title: data.Course, startTime: this.getTime(data, i, true), endTime: this.getTime(data, i , false),startRecur: firstDayofInstruction, endRecur: instructionEnds, allDay:false});
      }
    }else{
      let event = api.getEventById(data.CRN);
      if(event != null){
        event.remove();
      } else{
        alert('Cannot Found Event!');
      }
    }
  }
  getTime(data:courseObject, index: number, isStart:boolean){
    let tIndex=isStart?0:1; 
    let t = data.TimeSpan[index][tIndex];
    console.log(data.TimeSpan[index][2])
    if(data.TimeSpan[index][2]=="AM"){
      return t;
    } else{
      let temp = "";
      let pIndex = 0;
      let result = "";
      for(let i =0; i<t.length; i++){
        if(t[i]==":"){
          pIndex = i;
          break;
        } else{
          temp+=t[i];
        }
      }
      result+=(Number(temp)+12).toString();
      result+=t.substring(pIndex);
      console.log(result);
      return result;
    }

  }
}
