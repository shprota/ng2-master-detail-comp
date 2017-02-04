import { Component } from '@angular/core';
import { DsListContainerComponent } from 'app/ds-list/ds-list-container.component';
import { DsListItemComponent } from 'app/ds-list/ds-list-item.component';
import { DsListDetailComponent } from 'app/ds-list/ds-list-detail.component';
@Component({
  selector: 'app-person-layout-example1',
  templateUrl: './person-layout-example1.component.html',
  styleUrls: ['./person-layout-example1.component.css']
})
export class PersonLayoutExample1Component {

  persons = [{ name: "Bob Martin" }, { name: "Scott Alen" }, { name: "John Sonmez" }]

}
