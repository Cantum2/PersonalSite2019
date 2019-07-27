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
    description: 'Fitter is software for the fitness industry.' +
    ' Fitter allows users to log meals, workouts, track progress, manage goals, pay and find trainers/gyms. ' + 
    ' As a trainer Fitter allows personal trainers to see real time info of each of their clients to allow more' +
    ' accurate fitness information. Fitter also has functionality for gyms to be able to manage their facility. ' + 
    ' As of July 2019 the Android application is still in development',
    technologies: ['AngularJS', 'Node.JS', 'ExpressJS', ' Firebase', 'Android'],
    projectLink: 'https://fitter-fitter.herokuapp.com/',
    image: '../../assets/img/Fitterlogin.PNG'
},
    {name: 'S.E.T.A',
    description: '(Stock Elo Trading Algorithm) S.E.T.A was my first project in python and' +
    ' machine learning. The goal other the project was the create a new algorithm that would' +
    ' serve as a stock indicator. After generating what I called the "elo score" I attempted ' +
    ' to train a machine learning model using Tensorflow to be able to predict future elo scores '+
    'which delivered clear buy sell signs. ',
    technologies: ['Python', 'Tensorflow', 'SciPy'],
    github: 'https://github.com/Cantum2/S.E.T.A.',
    image: '../../assets/img/seta.jpg'
  },
    {name: 'Tapt (Deprecated)',
    description: 'A game where the objective is to tap an object that randomly moves around the screen to earn' +
    ' points to spend in the in-game store. Utilizes, fragments, local storage and multithreading.',
    technologies: ['Android'],
    image: '../../assets/img/appicon.png'
  },
    {name: 'Ether Radio ',
    description: '(WyoHack 2018- Singular DTV Challenge Winner)---Implemented a token curated registry to manage how music producers and aspiring artists' +
    ' interact with one another by creating an incentivized list of the top music which is judged by the users'+
    ' and rewarded with our own token ERT.',
    technologies: ['AngularJS', 'TCR/TCR-UI', 'NodeJS', 'Express'],
    projectLink: 'https://etherradio.herokuapp.com/',
    github: 'https://github.com/Cantum2/WyoHack2018',
    image: '../../assets/img/wyohack.PNG'
  },
  // {name: 'This Website',


  // }
  ]
  constructor() { }

  ngOnInit() {
  }

}
