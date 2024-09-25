import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PBindingComponent } from './components/p-binding/p-binding.component';
import { CBindingComponent } from './components/c-binding/c-binding.component';
import { EBindingComponent } from './components/e-binding/e-binding.component';
import { SBindingComponent } from './components/s-binding/s-binding.component';
import { ToWayDataBindingComponent } from './components/to-way-data-binding/to-way-data-binding.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { IfComponent } from './components/if/if.component';
import { ForComponent } from './components/for/for.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CourseNameComponent } from './components/course-name/course-name.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseService } from './services/course.service';
import { HttpClientModule } from '@angular/common/http';
import { SelectedItemComponent } from './components/selected-item/selected-item.component';
import { ShowApiDataComponent } from './components/show-api-data/show-api-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InterpolationComponent,
    PBindingComponent,
    CBindingComponent,
    EBindingComponent,
    SBindingComponent,
    ToWayDataBindingComponent,
    IfComponent,
    ForComponent,
    ParentComponent,
    ChildComponent,
    PageNotFoundComponent,
    CourseNameComponent,
    CourseDetailsComponent,
    SelectedItemComponent,
    ShowApiDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
