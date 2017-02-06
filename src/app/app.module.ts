import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DetailComponent } from 'app/master-detail/detail.component';
import { MasterDetailComponent } from 'app/master-detail/container.component';
import { MasterItemComponent } from 'app/master-detail/item.component';
import { PersonItemComponent } from './person/person-item.component';
import { PersonDetailComponent } from './person/person-detail.component';
import { Layout1Component } from './layout1/layout1.component';
import { Layout2Component } from './layout2/layout2.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    MasterDetailComponent,
    MasterItemComponent,
    PersonItemComponent,
    PersonDetailComponent,
    Layout1Component,
    Layout2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
