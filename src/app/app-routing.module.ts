import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IfComponent } from './components/if/if.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CourseNameComponent } from './components/course-name/course-name.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { SelectedItemComponent } from './components/selected-item/selected-item.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'if',
    component: IfComponent
  },
  {
    path: 'interpolation',
    component: InterpolationComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'courseName',
    component: CourseNameComponent
  },
  {
    path: 'courseDetails',
    component: CourseDetailsComponent
  },
  {
    path: 'selectedItem/:id',
    component: SelectedItemComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
