
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 url = "https://selfcare-service.demo.melita.com/interview/api/offers/100/subscriptions"
subscriptions;
  constructor(public http: HttpClient) {}

  ngOnInit(){
    this.getData()
  }


  getData(){
    this.http.get(this.url).subscribe((response:any)=>{
      this.subscriptions = response.subscriptions
    })
  }
}
