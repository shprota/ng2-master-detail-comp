import { Component } from '@angular/core';

@Component({
  selector: 'layout2',
  templateUrl: './layout2.component.html'
})
export class Layout2Component {
  persons = [{ name: "Malcom Reynolds" }, { name: "Zoe Washburne" }, { name: "Jayne Cobb" }, { name: "Kaylin" }]
}
