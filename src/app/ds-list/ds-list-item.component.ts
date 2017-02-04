import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ds-list-item',
  templateUrl: './ds-list-item.component.html',
  styleUrls: ['./ds-list-item.component.css']
})
export class DsListItemComponent {
  @Input() index: number;
  @Output() onSelected = new EventEmitter<number>();

  select() {
    this.onSelected.emit(this.index);
  }
}

