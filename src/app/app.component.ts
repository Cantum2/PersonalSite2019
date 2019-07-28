import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private appService: AppService){}
  
  ngOnInit() {

  }

  scrollTo(scrollValue: string){
    this.appService.scroll(scrollValue);
  }
}
