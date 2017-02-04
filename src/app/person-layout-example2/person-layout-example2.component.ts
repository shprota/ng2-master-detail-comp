import { Component } from '@angular/core';

@Component({
  selector: 'app-person-layout-example2',
  templateUrl: './person-layout-example2.component.html',
  styleUrls: ['./person-layout-example2.component.scss']
})
export class PersonLayoutExample2Component {
  persons = [{ name: "Malcom Reynolds" }, { name: "Zoe Washburne" }, { name: "Jayne Cobb" }]
}
