import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  size: number = 40;
  timelineEvents = [
    {header: '3M', 
    content: 'Technologies Used: Liquibase, MySQL, Spring, Angular(5,6,7), AWS, Jenkins, Agile/Scrum' + '\n\n' + 'When most people think 3M they think of the tape company. Little do most people know,' +
    ' 3M has an extremely diverse portfolio including a subsidary called 3M Health Information Systems (HIS) which is where interned.' +
    ' While interning at 3M I contributed to a toolset for an NLP engine that parses medical documents and is trained to predict a medical'+
    ' code. My major contributions include refactoring the interface which allows users to search for medical documents parsed by our AI.' + 
    ' I introduced several new features such as the ability for medical coders to compare their correctness across all medical facilities, and allowing users to select '+ 
    ' code options to search for which increases workflow effeciency for them.',
    contributions: [
      'Refactored an interface, that allows users to search for millions of documents processed by an NLP engine, to increase workflow and increase customer efficiency ',
      'Introduced new functionality for medical coders to compare their correctness across all other medical facilities ',
      'Participated in an Agile Scrum team and collaborated with team members to produce enterprise quality software ',
      'Optimized the loading of internal functionality resulting in a speed up of over 10 seconds for customers'
    ],
     year: 'May 2019 - August 2019'},
    //  {header: 'University of Wyoming', content: 'Currently attending University of Wyoming majoring in Computer Science. Current GPA: 3.5 ', year: '2019-2020'},
     {header: 'Happy Jack Software',
     content: 'Technologies Used: Liquibase, MySQL, Spring, AngularJS (1.X)' + '\n\n' + 'I landed my first job in tech as a Junior Software Developer in Laramie, Wyoming.' + 
     ' I made several contributions to the flagship product which is a Electronic Medication Administration Record (eMar),' +
     ' most noteably I introduced a new feature for our customers to generate numerous reports on different aspects of their' +
     ' facility to assess everything from effeciency of their nurses to incidents frequency. Smaller contributions '+
     ' include various optimizations (code refactoring/speed increase) and bug fixes.', 
     contributions: [
      'Introduced a new feature utilizing every technology of our tech stack (Spring Boot, AngularJS, MySQL) that allows the user to run an assessment on various patients within a group home.',
      'Designed and developed a report to give clients an overview of their facility which resulted in an estimated 90% increase in efficiency for our client’s administration.',
      'Reduced report generation time by 40% for a group home management system, by optimizing the reporting engine (written in Spring Boot)'
    ],
     year: 'May 2018 - February 2019'},
    
    // {header: 'Graduated High School', content: 'Graduated from Pinedale Highschool in Pinedale, Wyoming', year: '2016'},
    // {header: 'Community College', content: 'Graduated from Western Wyoming Community College in Rock Springs, ' +
    // 'Wyoming with my Associate of Science in Computer Science with a 3.6 GPA', year: '2018'},
  ];

  selected = this.timelineEvents[0];

  constructor() { }

  ngOnInit() {
  }

}
