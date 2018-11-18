import { Component } from '@angular/core';

import { CoursesService } from './courses.service';

// anywhere we have an element like <courses>, angular is going to render the template for this component

// registered in app module

@Component({
  selector: 'courses',
  template: `<h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>`
})
export class CoursesComponent{

  title = "List of courses";
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}

// ` to split html over lines
// <courses> "courses"
// <div class="courses"> ".courses"
// <div id="courses"> "#courses"
