import { Component } from '@angular/core';
@Component({
  selector: 'app-person-layout-example1',
  templateUrl: './person-layout-example1.component.html'
})
export class PersonLayoutExample1Component {
  selectedIndex : number = 0;
  persons = [{ name: "Bob Martin" }, { name: "Scott Alen" }, { name: "John Sonmez" }]

}
