import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Person} from './header.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  person = <Person>{};
  testingInput: String = '';
  @ViewChild('aboutMe', {static: true}) aboutMe: ElementRef;

  constructor() { }

  ngOnInit() {
    this.person.name = 'Name input';
  }

  triggerClick(){
    console.log(this.aboutMe)
    this.aboutMe.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
