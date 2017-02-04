import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ds-list-container',
  templateUrl: './ds-list-container.component.html',
  styleUrls: ['./ds-list-container.component.css']
})
export class DsListContainerComponent implements OnInit {

  @Input() selectedIndex: number;

  constructor() { }

  ngOnInit() {
  }

  childItemSelected($event) :void{
    alert("Dude" + $event);
  }

}
