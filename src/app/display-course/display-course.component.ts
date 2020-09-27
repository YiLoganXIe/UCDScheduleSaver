import { MongodbCourseService } from './../mongodb-course.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-course',
  templateUrl: './display-course.component.html',
  styleUrls: ['./display-course.component.css']
})
export class DisplayCourseComponent implements OnInit {
  content;
  constructor(private service: MongodbCourseService) {
   }

  ngOnInit(): void {
    this.service.newData$.subscribe(url=>{
      this.getResult(url);
    })
  }



  getResult(url) {
    if(url == ""){
      this.content = [];
    } else{
      this.service.LoadCourseData(url)
      .subscribe(res => {
        console.log(res);
        this.content = res;
      });
    }
  }
}
