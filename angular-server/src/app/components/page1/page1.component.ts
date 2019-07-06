import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  constructor(private dataService: DataService) {
  }

  ngOnInit() {}

  clickPost() {
    const data = {
      id: Math.random() * 100,
      user: 'Gabesz'
    };

    this.dataService.postData(data).subscribe((res) => {
      console.log('POST DONE: ', res);
    });
  }
}
