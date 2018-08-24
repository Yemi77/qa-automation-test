import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My QA Automation Test Site';
  username = "";
  password = "";
  loggedIn: boolean;
  denied: boolean;
  pet: string;
  response: Observable<any>;

  constructor(private service: DataService) {
  }

  ngOnInit(): void {
    this.response = this.service.fetch();
  }


  login() {
    setTimeout(() => {
      if (this.username === 'user1' && this.password === 'password1') {
        this.loggedIn = true;
      } else {
        this.denied = true;
      }
    }, 1500);
  }





}
