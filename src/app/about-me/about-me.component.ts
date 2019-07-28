import { Component, OnInit } from '@angular/core';
import { MatAccordion } from '@angular/material';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  languages = ['Java', 'TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS', ];
  frameworks = ['Angular', 'AngularJS', 'ReactJS', 'Spring', 'Android', 'SciPy', 'NodeJS'];
  databases = ['MySQL', 'NoSQL(Firebase)'];
  others = ['Git', 'Agile/Scrum', 'Angular Material', 'AWS'];
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

}
