import { Component, OnInit } from '@angular/core';
import { MatAccordion } from '@angular/material';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  languages = ['Java', 'JavaScript(ES6+)/TypeScript', 'Python', 'HTML & CSS'];
  frameworks = ['Angular (1-8)','Spring', 'Android', 'SciPy', 'NodeJS'];
  databases = ['MySQL', 'Firebase'];
  others = ['Git', 'Agile/Scrum', 'Angular Material', 'AWS'];
  recentTechnoliges = ['Java', 'JavaScript(ES6+)/TypeScript', 'HTML & CSS', 'Angular (1-8)','Spring', 'Android', 'NodeJS', 'Firebase', 'MySQL' ];
  allSkills = [...this.languages, ...this.frameworks, ...this.databases, ...this.others];
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

}
