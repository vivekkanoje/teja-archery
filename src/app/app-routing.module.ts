import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { DetailedcourseComponent } from './components/pages/detailedcourse/detailedcourse.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MainComponent } from './components/pages/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: "main", pathMatch: "full" },
  { path: 'main', component: MainComponent },
  { path: 'course-details', component: DetailedcourseComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: MainComponent }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
