import { CommonModule } from '@angular/common';
import { AppDataService } from './../app-data.service';
import { Component, OnInit} from '@angular/core';

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
  selector: 'app-fav-course-bar',
  templateUrl: './fav-course-bar.component.html',
  styleUrls: ['./fav-course-bar.component.css']
})

export class FavCourseBarComponent implements OnInit {
  constructor(private service: AppDataService) {
    this.service.newFavCourse$.subscribe(
      newFavList =>{
        this.favList = newFavList;
        console.log(this.favList);
      }
    )
   }

  favList = [];
  ngOnInit(): void {
  }

  updateFavList(newFavList){
    this.favList = newFavList;
  }

}
