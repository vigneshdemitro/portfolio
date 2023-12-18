import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';


const routes: Routes = [
  { path : "", component : HomePageComponent, pathMatch : "full"},
  { path : "home", component : HomePageComponent},
  { path : "about", component : AboutPageComponent},
  // { path : "project", component : ProjectPageComponent}, // disabling project route
  { path : "resume", component : ResumePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ HomePageComponent, AboutPageComponent, ProjectPageComponent, ResumePageComponent ]