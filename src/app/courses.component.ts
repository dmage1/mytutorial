import { Component } from '@angular/core';

@Component({
  selector: 'courses'
  template: '<h2>{{ title }}</h2>'
})
export class CoursesComponent{

  title = "List of courses";
  courses;

  getTitle() {
    /** template: '<h2>{{ title }}<\h2>' **/
    /** template: '<h2>{{ "Title:" + title }}<\h2>' **/
    /** template: '<h2>{{ getTitle() }}<\h2>' **/
    return this.title;
  }

}
