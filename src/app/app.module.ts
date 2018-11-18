import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { CourseComponent } from './course/course.component';

@NgModule({
  // where we add all the components that are part of this module
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      // Uses the Singleton Pattern; a single instance of a given object exists in the memory.
      CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
