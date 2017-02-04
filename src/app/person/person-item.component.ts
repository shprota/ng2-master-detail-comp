import { Component, Input } from '@angular/core';
import { Person } from "./person-model";

@Component({
  selector: 'person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent {
  @Input() person: Person;
  @Input() selected: boolean;
}