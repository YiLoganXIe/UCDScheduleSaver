import { DragDropModule } from '@angular/cdk/drag-drop';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import interactionPlugin from '@fullcalendar/interaction';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component'; // a plugin
import { Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  timeGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    DisplayCourseComponent,
    CourseDetailComponent,
    FavoriteComponent,
    CourseSearchFormComponent,
    FavCourseBarComponent,
    FullcalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [
    MongodbCourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
