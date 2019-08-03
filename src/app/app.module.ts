import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatListModule, MatCardModule, MatInputModule, MatChipsModule, MatExpansionModule, MatIconModule, MatTooltipModule} from '@angular/material';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { ProjectsComponent } from './projects/projects.component';
import { SingleProjectComponent } from './single-project/single-project.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    SingleProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoogleChartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatExpansionModule,
    MatChipsModule,
    MatListModule,
    MatCardModule,
    MglTimelineModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
