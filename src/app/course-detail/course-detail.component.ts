import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  @Input('course') mycourse;
  @Input('inFavBar') inFavBar: boolean = false;
  isExpanded: boolean = false;
  geExpanded:boolean = false;
  descriptionExpanded:boolean = false;
  constructor() {
  }

  get course(){
    return this.mycourse;
  }

  ngOnInit(): void {
  }

  printTimeLocation(course){
    let lines = [];
    for (let i = 0; i < course.MeetWeekDay.length; i++){
      let line = "";
      line+=course.MeetWeekDay[i]+" "+course.TimeSpan[i][0]+"-"+course.TimeSpan[i][1]+" "+course.Location[i];
      lines.push(line);
    }
    return lines;
  }

  toggle(){
    this.isExpanded=!this.isExpanded
  }

  toggleGE(){
    this.geExpanded=!this.geExpanded
  }

  toggleDescription(){
    this.descriptionExpanded = !this.descriptionExpanded
  }

}
