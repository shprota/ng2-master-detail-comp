import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Component({
  selector: 'md-container',
  template: `<ng-content></ng-content>`
})
export class MasterDetailComponent {
  selectionSource : Subject<number>;
  public selectionStream$ :Observable<number>;
  @Input() itemsModel: any[];
  selectedIndex: number = 0;

  constructor() {
        this.selectionSource = new Subject<number>();
        this.selectionStream$ = this.selectionSource.asObservable();
  }

  public itemSelected(index: number) {
    this.selectedIndex = index;
    this.selectionSource.next(index);
  }

}
