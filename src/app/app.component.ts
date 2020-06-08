import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'User-Profile';
  data: any;
  user: any;
  constructor(private http : HttpClient){}

  getData() {
    const url = "https://reqres.in/api/users?page=1";
    this.http.get(url).subscribe((res) => {
      debugger
      this.data = res;
      this.user = _.get(res, 'data');
      console.log(this.data);
    });
  }

  ngOnInit() {
    // this.getData();
  }
}
