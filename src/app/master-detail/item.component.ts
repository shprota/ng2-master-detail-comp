import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'md-item',
  template: `<div class="listItem" (click)="select()"><ng-content></ng-content></div>`,
  styles: [`.listItem { cursor: pointer; }`]
})
export class MasterItemComponent {
  @Input() index: number;
  @Output() onSelected = new EventEmitter<number>();

  select() {
    this.onSelected.emit(this.index);
  }
}
