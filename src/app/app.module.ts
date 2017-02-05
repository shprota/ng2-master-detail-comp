import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DetailComponentNew } from 'app/master-detailNew/detail.component';
import { MasterDetailComponentNew } from 'app/master-detailNew/container.component';
import { MasterItemComponentNew } from 'app/master-detailNew/item.component';
import { PersonItemComponent } from './person/person-item.component';
import { PersonDetailComponent } from './person/person-detail.component';
import { Layout1Component } from './layout1/layout1.component';
import { Layout2Component } from './layout2/layout2.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponentNew,
    MasterDetailComponentNew,
    MasterItemComponentNew,
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
