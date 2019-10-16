import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 url = "https://selfcare-service.demo.melita.com/interview/api/offers/100/subscriptions"
subscriptions;
  constructor(public http: HttpService) {}

  ngOnInit(){
    this.getData()
  }


  getData(){
    this.http.get(this.url).subscribe((response:any)=>{
      this.subscriptions = response.subscriptions
    })
  }
}
