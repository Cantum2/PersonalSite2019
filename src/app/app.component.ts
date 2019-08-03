import { Component, ViewChild, ElementRef, OnInit, HostListener } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showScrollElement:boolean = false;

  @HostListener('window:scroll', ['$event'])
  scrollEvent(){
    this.showScrollElement = window.pageYOffset > 500; 
  }

  constructor(private appService: AppService){}
  
  ngOnInit() {

  }

  scrollTo(scrollValue: string){
    this.appService.scroll(scrollValue);
  }
}
