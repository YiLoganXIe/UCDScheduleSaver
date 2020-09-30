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

@NgModule({
  declarations: [
    AppComponent,
    DisplayCourseComponent,
    CourseDetailComponent,
    FavoriteComponent,
    CourseSearchFormComponent,
    FavCourseBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    MongodbCourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
