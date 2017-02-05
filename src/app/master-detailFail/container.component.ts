import { Type, Component, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'md-container',
  templateUrl: "./container.component.html"
})
export class MasterDetailComponent implements AfterViewInit {
  @Input() modelList: any[];

  @Input() component: Type<any>;

  ngAfterViewInit() {
  }

}
