import { OnInit, Component, ContentChild, Input } from '@angular/core';
import { MasterDetailComponent } from './container.component'

@Component({
  selector: 'md-item',
  template: `
<li class="list-group-item listItem" (click)="select()" [class.active]="active">
    <ng-content></ng-content>
</li>`,
  styles: [`.listItem { cursor: pointer;}`]
})
export class MasterItemComponent implements OnInit {
  @Input() index: number;
  @ContentChild('item') itemComponent: any;

  constructor(private parentComponent: MasterDetailComponent) {
  }
  public ngOnInit(): void {
    if (this.itemComponent == undefined) {
      console.error("md-item; It is required to have a item component marked with #item");
      return;
    }

    this.itemComponent.model = this.parentComponent.itemsModel[this.index];
  }
  public get active() {
    return this.parentComponent.selectedIndex === this.index;
  }
  public select() {
    this.parentComponent.itemSelected(this.index);
  }

}
