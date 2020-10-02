import { AppDataService } from './../app-data.service';
import { Component, OnInit, Input } from '@angular/core';

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
      this.favCourseService.operation = {status: '-', data: this.course};
    } else{
      this.favCourseService.operation = {status: '+', data: this.course};
    }
    this.favCourseService.UpdateFavCourse();
    this.isFavorite=!this.isFavorite;
  }

  ngOnInit(): void {
  }

}
