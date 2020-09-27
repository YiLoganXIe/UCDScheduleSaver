import { MongodbCourseService } from './mongodb-course.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayCourseComponent } from './display-course/display-course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CourseSearchFormComponent } from './course-search-form/course-search-form.component';
import { FavCourseBarComponent } from './fav-course-bar/fav-course-bar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import { ScheduleComponent } from './schedule/schedule.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export function momentAdapterFactory() {
  return adapterFactory(moment);
};

@NgModule({
  declarations: [
    AppComponent,
    DisplayCourseComponent,
    CourseDetailComponent,
    FavoriteComponent,
    CourseSearchFormComponent,
    FavCourseBarComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory }),
    NgbModule
  ],
  providers: [
    MongodbCourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
