import { Component, Input } from '@angular/core';
import { Person } from "./person-model";

@Component({
  selector: 'person-detail',
  templateUrl: './person-detail.component.html'
})
export class PersonDetailComponent {
  @Input() model: Person;
}
