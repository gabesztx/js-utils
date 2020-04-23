import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InputBase } from './models/input-base';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  // emails$: Observable<InputBase<any>[]>;
  constructor(private service: DataService) {
  }

  ngOnInit(): void {
  /*  this.emails$ = this.service.getEmailInput();
    this.emails$.subscribe((res) => {
      console.log('emails: ', res);
    })*/
  }

}
