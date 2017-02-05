import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DetailComponent } from 'app/master-detail/detail.component';
import { MasterDetailComponent } from 'app/master-detail/container.component';
import { MasterItemComponent } from 'app/master-detail/item.component';
import { DetailComponentNew } from 'app/master-detailNew/detail.component';
import { MasterDetailComponentNew } from 'app/master-detailNew/container.component';
import { MasterItemComponentNew } from 'app/master-detailNew/item.component';
import { PersonItemComponent } from './person/person-item.component';
import { PersonDetailComponent } from './person/person-detail.component';
import { PersonLayoutExample1Component } from './example1-layout/person-layout-example1.component';
import { PersonLayoutExample2Component } from './example2-layout/person-layout-example2.component';
import { PersonLayoutExample3Component } from './example3-layout/person-layout-example3.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    MasterDetailComponent,
    MasterItemComponent,
    DetailComponentNew,
    MasterDetailComponentNew,
    MasterItemComponentNew,
    PersonItemComponent,
    PersonDetailComponent,
    PersonLayoutExample1Component,
    PersonLayoutExample2Component,
    PersonLayoutExample3Component
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
