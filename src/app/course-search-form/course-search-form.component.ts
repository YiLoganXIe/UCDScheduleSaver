import { CommonModule } from '@angular/common';
import { MongodbCourseService } from './../mongodb-course.service';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-course-search-form',
  templateUrl: './course-search-form.component.html',
  styleUrls: ['./course-search-form.component.css']
})

export class CourseSearchFormComponent implements OnInit {
  fields: Array<String>;
  constructor(private service: MongodbCourseService) { }

  ngOnInit(): void {
    this.service.LoadField()
    .subscribe(res=>{
      console.log(res);
      this.fields = res as Array<String>;
    })
  }
  submit(f){
    let m_field = f.m_field==""||f.m_field=="-"?0:f.m_field;
    let m_course = f.m_course==""?0:f.m_course;
    let m_CRN = f.m_CRN==""?0:f.m_CRN;
    let m_instructor = f.m_instructor==""?0:f.m_instructor;
    let url = `http://localhost:8080/api/course/${m_field}/${m_course}/${m_CRN}/${m_instructor}`;
    this.service.loadNewURL(url);
  }

}
