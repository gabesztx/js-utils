import { Component, OnDestroy, OnInit } from '@angular/core';
import { Course, HttpService } from '../services/http.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit, OnInit, OnDestroy {
  course: Subscription;
  courseParam: Subscription;

  constructor(private httpService: HttpService) {

  }

  ngOnInit(): void {
    /*this.courseParam = this.httpService.getCourseParam$().subscribe(
      (courseParams) => {
        console.log('Done: ', courseParams);
      },
    );*/
    /*this.course = this.httpService.getCourse$().subscribe(
      (course) => {
        console.log('Done: ', course);
      },
    );*/
  }

  ngOnDestroy(): void {
    // this.course.unsubscribe();
    // this.courseParam.unsubscribe();
  }
}
