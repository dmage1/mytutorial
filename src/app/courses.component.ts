import { Component } from '@angular/core';

// anywhere we have an element like <courses>, angular is going to render the template for this component

// registered in app module

@Component({
  selector: 'courses',
  template: `<h2>{{ getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `

})
export class CoursesComponent{

  title = "List of courses";
  courses = ["course1", "course2", "course3"];

  getTitle() {
    return this.title;
  }

}
