import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Bug } from './bug-tracker/models/bug';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bug-tracker-app';

  constructor(private httpClient : HttpClient){

  }

  ngOnInit(){
    const bugs$ = this.httpClient
      .get<Bug[]>('http://localhost:3000/bugs')

    bugs$.subscribe(bugs => console.table(bugs));
  }
}
