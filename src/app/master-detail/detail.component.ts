import { Component, ContentChild, OnDestroy, OnInit } from '@angular/core';
import { MasterDetailComponent } from './container.component'
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'md-detail',
  templateUrl: "./detail.component.html"
})
export class DetailComponent implements OnDestroy, OnInit {
  selectedIndex: number = undefined;
  selectedModel: any = undefined;
  subscription: Subscription;

  @ContentChild('detail') detailComponent: any;

  constructor(private parentComponent: MasterDetailComponent) {
  }
  ngOnInit() {
    if (this.detailComponent == undefined) {
      console.error("md-detail; It is required to have a detail component marked with #detail");
      return;
    }

    this.subscription = this.parentComponent.selectionStream$.subscribe(
      (index) => {
        this.select(index);
      }
    )
    this.select( this.parentComponent.selectedIndex);
  }

  select(index: number): void {
    this.selectedIndex = index;
    this.selectedModel = this.parentComponent.itemsModel[index];

    this.detailComponent.model = this.selectedModel;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
