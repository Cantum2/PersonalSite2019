import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Person } from '../app.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  person = <Person>{};
  testingInput: String = '';
  @ViewChild('aboutMe', {static: true}) aboutMe: ElementRef;
  @ViewChild('experience', {static: true}) experience: ElementRef;
  @ViewChild('projects', {static: true}) projects: ElementRef;

  scrollBehavior = { behavior: 'smooth', block: 'start' }

  constructor(private appService: AppService) { 
    this.appService.called.subscribe(()=> {
      this.scrollUpdate()
    });
  }

  ngOnInit() {
    this.person.name = 'Name input';
  }

  triggerClick(){
    this.aboutMe.nativeElement.scrollIntoView(this.scrollBehavior);
  }

  scrollUpdate(){
    const name = this.appService.scrollValue;
    switch (name) {
      case 'about':
        this.aboutMe.nativeElement.scrollIntoView(this.scrollBehavior);
        break;
      case 'experience':
        this.experience.nativeElement.scrollIntoView(this.scrollBehavior);
        break;
      case 'projects':
        this.projects.nativeElement.scrollIntoView(this.scrollBehavior);
        break;
      default:
        break;
    }

  }

}
