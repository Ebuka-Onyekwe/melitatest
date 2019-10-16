import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  offers;
  constructor(public http: HttpService){}

  url = 'https://selfcare-service.demo.melita.com/interview/api/offers'
  
  ngOnInit(){
    this.getData()
  }


  getData(){
    this.http.get(this.url).subscribe((response:any)=>{
      this.offers = response.offers
    })
  }
}