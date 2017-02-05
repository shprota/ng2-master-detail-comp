import { OnInit, Component, ContentChild, Input } from '@angular/core';
import { MasterDetailComponentNew } from './container.component'

@Component({
  selector: 'mdn-item',
  templateUrl: "./item.component.html",
  styles: [`.listItem { cursor: pointer;}`]
})
export class MasterItemComponentNew implements OnInit {
  @Input() index: number;
  @ContentChild('item') itemComponent: any;

  constructor(private parentComponent: MasterDetailComponentNew) {
  }
  ngOnInit() {
    if (this.itemComponent == undefined) {
      console.error("mdn-item; It is required to have a item component marked with #item");
      return;
    }

    this.itemComponent.model = this.parentComponent.itemsModel[this.index];
  }
  get active() {
    return this.parentComponent.selectedIndex === this.index;
  }
  select() {
    this.parentComponent.itemSelected(this.index);
  }

}
