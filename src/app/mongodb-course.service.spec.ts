import { TestBed } from '@angular/core/testing';

import { MongodbCourseService } from './mongodb-course.service';

describe('MongodbCourseService', () => {
  let service: MongodbCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MongodbCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
