import { Component, Input } from '@angular/core';
import { Person } from "./person-model";

@Component({
  selector: 'person-item',
  templateUrl: './person-item.component.html',
  styles: [`.list-group-item{ margin: 5px;}`]
})
export class PersonItemComponent {
  @Input() person: Person;
  @Input() selected: boolean;
}