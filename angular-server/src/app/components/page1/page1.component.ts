import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  $getConfig: Observable<any>;
  $getUserData: Observable<any>;
  $postUserData: Observable<any>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.$getConfig = this.dataService.getConfig();
    // $getUserData.subscribe((res) => {});
  }

  clickGet() {
  }

  clickPost() {
    const data = {
      id: Math.random() * 100,
      user: 'Gabesz'
    };

    this.dataService.postData(data).subscribe((res) => {
      console.log('POST RESPONSE', res);
    });
  }

}
