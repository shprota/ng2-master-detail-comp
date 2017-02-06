import { Component, Input } from '@angular/core';
import { Person } from "./person-model";

@Component({
  selector: 'person-item',
  template: `{{model?.name}}`
})
export class PersonItemComponent {
  @Input() model: Person;
}