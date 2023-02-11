import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { WhychooseusComponent } from './components/whychooseus/whychooseus.component';
import { MainComponent } from './components/pages/main/main.component';
import { OurcoachComponent } from './components/ourcoach/ourcoach.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailedcourseComponent } from './components/pages/detailedcourse/detailedcourse.component';
import { LoginComponent } from './components/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactusComponent,
    WhychooseusComponent,
    MainComponent,
    OurcoachComponent,
    ProgramsComponent,
    CoursesComponent,
    HomeComponent,
    HeaderComponent,
    DetailedcourseComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
