import { Component, ContentChild, OnDestroy, OnInit } from '@angular/core';
import { MasterDetailComponent } from './container.component'
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'md-detail',
  template: `
<div class="card" >
  <div class="card-block">
    <h4 class="card-title">Detail Area</h4>
    <p class="card-text"><ng-content *ngIf="selectedModel"></ng-content></p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>  
`
})
export class DetailComponent implements OnDestroy, OnInit {
  private selectedIndex: number = undefined;
  private selectedModel: any = undefined;
  private subscription: Subscription;

  @ContentChild('detail') detailComponent: any;

  constructor(private parentComponent: MasterDetailComponent) {
  }
  public ngOnInit() {
    if (this.detailComponent == undefined) {
      console.error("md-detail; It is required to have a detail component marked with #detail");
      return;
    }

    this.subscription = this.parentComponent.selectionStream$.subscribe(
      (index) => {
        this.select(index);
      }
    )
    this.select(this.parentComponent.selectedIndex);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private select(index: number): void {
    this.selectedIndex = index;
    this.selectedModel = this.parentComponent.itemsModel[index];

    this.detailComponent.model = this.selectedModel;
  }

}
