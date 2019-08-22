import { Component, OnInit } from '@angular/core';
import { Project } from '../app.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {name: 'Fitter', 
    description: '(Finalist in Fisher Innovation Launchpad for part of 120k in seed funding)---Fitter is software for the fitness industry.' +
    ' Fitter allows users to log meals, workouts, track progress, manage goals, pay and find trainers/gyms. ' + 
    ' As a trainer, Fitter allows you to see real-time info of each of your clients to allow for more' +
    ' accurate fitness information. Fitter also has functionality for gyms to be able to manage their facility. ' + 
    ' As of July 2019 the Android application is still in development',
    technologies: ['AngularJS', 'Node.JS', 'ExpressJS', ' Firebase', 'Android'],
    projectLink: 'https://fitter-fitter.herokuapp.com/',
    image: 'https://imgur.com/NcSz5pk.png'
},
    {name: 'S.E.T.A',
    description: '(Stock Elo Trading Algorithm) S.E.T.A was my first project in python and' +
    ' machine learning. The goal of the project was to create a new algorithm that would' +
    ' serve as a stock indicator. After generating what I called the "elo score" I attempted ' +
    ' to train a machine learning model using Tensorflow to be able to predict future elo scores '+
    'which delivered clear buy sell signs. ',
    technologies: ['Python', 'Tensorflow', 'SciPy'],
    github: 'https://github.com/Cantum2/S.E.T.A.',
    image: 'https://imgur.com/HlnARH1.png'
  },
    {name: 'Tapt',
    description: 'A game where the objective is to tap an object that randomly moves around the screen to earn' +
    ' points to spend in the in-game store. Utilizes, fragments, local storage and multithreading.',
    technologies: ['Android'],
    image: 'https://imgur.com/61WRtkK.png'
  },
    {name: 'Ether Radio ',
    description: '(WyoHack 2018- Singular DTV Challenge Winner)---Implemented a token curated registry to manage how music producers and aspiring artists' +
    ' interact with one another by creating an incentivized list of the top music which is judged by the users'+
    ' and rewarded with our own token ERT.',
    technologies: ['AngularJS', 'TCR/TCR-UI', 'NodeJS', 'Express'],
    projectLink: 'https://etherradio.herokuapp.com/',
    github: 'https://github.com/Cantum2/WyoHack2018',
    image: 'https://imgur.com/cUtt0CB.png'
  },
  // {name: 'This Website',
  // description: 'This project serves as a portfolio for people to get to know me a bit more as a developer and as a person. '+
  // ' It is also my first project utilizing AWS and is stored/hosted in an S3 bucket. Working on Mobile Responsitivity.',
  // technologies: ['Angular 8', 'Angular Material', 'TypeScript'],
  // projectLink: 'http://marcuscantu.com',
  // github: 'https://github.com/Cantum2/PersonalSite2019',
  // image: 'https://imgur.com/8o2jWiY.png'
  // }
  ];

  
  languages = ['Java', 'TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS', ];
  frameworks = ['Angular', 'AngularJS', 'ReactJS', 'Spring', 'Android', 'SciPy', 'NodeJS'];
  databases = ['MySQL', 'NoSQL(Firebase)'];
  others = ['Git', 'Agile/Scrum', 'Angular Material', 'AWS'];

  skills = [
    'Java', 'TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS', 
    'Angular', 'AngularJS', 'ReactJS', 'Spring', 'Android', 'SciPy', 'NodeJS',
    'MySQL', 'NoSQL(Firebase)',
    'Git', 'Agile/Scrum', 'Angular Material', 'AWS'
  ];
  constructor() { }

  ngOnInit() {
  }

}
