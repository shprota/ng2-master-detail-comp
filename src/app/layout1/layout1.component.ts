import { Component } from '@angular/core';

@Component({
  selector: 'layout1',
  templateUrl: './layout1.component.html'
})
export class Layout1Component {
  persons = [{ name: "Malcom Reynolds" }, { name: "Zoe Washburne" }, { name: "Jayne Cobb" }]
}
