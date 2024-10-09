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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ConsumeAPIComponent } from './components/consume-api/consume-api.component';
import { ChangeDetectionParentComponent } from './components/change-detection-parent/change-detection-parent.component';
import { ChangeDetectionChildComponent } from './components/change-detection-child/change-detection-child.component';
import { CounterPatentComponent } from './NgRx/counter-patent/counter-patent.component';
import { CounterActionsComponent } from './NgRx/counter-actions/counter-actions.component';
import { CounterDisplayComponent } from './NgRx/counter-display/counter-display.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './Store/counterReducer';
import { TdfComponent } from './forms/tdf/tdf.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { RenderdataComponent } from './forms/renderdata/renderdata.component';
import { SampleReactiveComponent } from './forms/sample-reactive/sample-reactive.component';
import { LCHchildComponent } from './lifeCycleHooks/lchchild/lchchild.component';

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
    ConsumeAPIComponent,
    ChangeDetectionParentComponent,
    ChangeDetectionChildComponent,
    CounterPatentComponent,
    CounterActionsComponent,
    CounterDisplayComponent,
    TdfComponent,
    ReactiveFormComponent,
    RenderdataComponent,
    SampleReactiveComponent,
    LCHchildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({Counter: counterReducer}) 
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
