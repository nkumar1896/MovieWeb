import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-watchlater',
  templateUrl: './watchlater.component.html',
  styleUrls: ['./watchlater.component.css']
})
export class WatchlaterComponent implements OnInit {

  res1:any;
  constructor(private http: HttpClient) {
   
  }

  ngOnInit() {
    let obj=this.http.get('http://localhost:3000/watchlater')
    obj.subscribe((res1)=>{
      this.res1=res1;
      console.log(this.res1);
    })
  }
}