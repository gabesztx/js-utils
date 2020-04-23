import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user/services/user-data.service';
import { DbDataService } from '../services/db-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  DUMMY_DATA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  moviesArr: any[] = [
    {
      id: 1,
      title: 'Super Man'
    },
    {
      id: 2,
      title: 'Spider Man'
    },
    {
      id: 3,
      title: 'Aladdin'
    },
    {
      id: 4,
      title: 'Downton Abbey'
    }
  ];

  obj = {};

  constructor(private dbDataService: DbDataService, private userDataService: UserDataService) {
  }


  ngOnInit(): void {
    let val = '';
    // TODO: Object defineProperty
  /*  Object.defineProperty(this.obj, 'name', {
      get(): any {
        return val;
      },
      set(v: any): void {
        val = 'aha'
      },
      configurable: true,
      writable: true,
    });*/

    console.log(this.obj);
    // this.obj['name'] = 'jolo';
    // console.log(this.obj);
  }

  changeData() {
    // this.DUMMY_DATA[1] = 50;
    this.moviesArr[1].title = 'ÖDÖN';
  }

  trackByMethod(index: number, el: any): number {
    console.log('trackByMethod', index, ' - ', el);
    return el.id;
  }

  getUsers() {
    console.log('getUsers');
    this.userDataService.getUsers().subscribe(
      (data) => {
        console.log('Users', data);
      });
  }


  getUser() {
    console.log('getUser');
    this.userDataService.getUser(1).subscribe(
      (data) => {
        console.log('User:', data);
      });
  }
}
