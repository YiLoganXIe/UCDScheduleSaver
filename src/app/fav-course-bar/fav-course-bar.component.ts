import { CourseDetailComponent } from './../course-detail/course-detail.component';
import { CommonModule } from '@angular/common';
import { AppDataService } from './../app-data.service';
import { Component, OnInit} from '@angular/core';

interface courseObject{
  Course: string;
  Section: string;
  CRN: string;
  Credit: string;
  MeetWeekDay: Array<string>;
  TimeSpan: Array<Array<string>>;
  Location: Array<string>;
}

@Component({
  selector: 'app-fav-course-bar',
  templateUrl: './fav-course-bar.component.html',
  styleUrls: ['./fav-course-bar.component.css']
})

export class FavCourseBarComponent implements OnInit {
  constructor(private service: AppDataService) {
    this.service.newFavCourse$.subscribe(
      operation =>{
        if(operation.status == "+"){
          this.favList.push(operation.data);
          console.log(this.favList);
        }
        else{
          this.deleteCourse(operation.data);
        }
      }
    )
   }

  favList = [];
  ngOnInit(): void {
  }

  updateFavList(newFavList){
    this.favList = newFavList;
  }

  deleteCourse(course:courseObject){
    for(let i=0; i<this.favList.length; i++){
      if(this.favList[i].CRN==course.CRN){
        this.favList.splice(i,1);
        return;
      }
    }
    console.log("ERR: Cannot find data in the List");
  }
}
