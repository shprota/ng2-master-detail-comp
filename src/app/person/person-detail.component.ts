import { Component, Input } from '@angular/core';
import { Person } from "./person-model";

@Component({
  selector: 'person-detail',
  template: `Some details about {{model?.name}}`
})
export class PersonDetailComponent {
  @Input() model: Person;
}
