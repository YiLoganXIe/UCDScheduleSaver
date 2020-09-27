import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavCourseBarComponent } from './fav-course-bar.component';

describe('FavCourseBarComponent', () => {
  let component: FavCourseBarComponent;
  let fixture: ComponentFixture<FavCourseBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavCourseBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavCourseBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
