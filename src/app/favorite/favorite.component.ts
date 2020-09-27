import { AppDataService } from './../app-data.service';
import { Component, OnInit, Input } from '@angular/core';

interface courseObject{
  Course: string;
  Section: string;
  CRN: string;
  Credit: string;
  MeetWeekDay: Array<string>;
  TimeSpan: Array<string>;
  Location: Array<string>;
}

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input("course") course: courseObject;

  isFavorite:boolean = false;

  constructor(private favCourseService: AppDataService) { }

  OnClick(){
    if(this.isFavorite){
      this.deleteCourse()
    } else{
      this.favCourseService.favCourseList.push(this.course);
    }
    this.favCourseService.UpdateFavCourse();
    this.isFavorite=!this.isFavorite;
  }

  ngOnInit(): void {
  }

  deleteCourse(){
    for(let i=0; i<this.favCourseService.favCourseList.length; i++){
      if(this.favCourseService.favCourseList[i].CRN==this.course.CRN){
        this.favCourseService.favCourseList.splice(i,1);
        return;
      }
    }
    console.log("ERR: Cannot find data in the List");
  }

}
