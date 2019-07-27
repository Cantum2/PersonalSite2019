import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css']
})
// tslint:disable: no-input-rename
export class SingleProjectComponent implements OnInit {
  @Input('projectInfo') projectInfo: any; 
  @Input('index') index: number;

  constructor() { }

  ngOnInit() {
    this.projectInfo.even = this.index % 2 === 0;
  }

}
