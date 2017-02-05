import { Type, Component, EventEmitter, Input, Output, AfterViewInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AppModule } from 'app/app.module';

@Component({
  selector: 'md-item',
  templateUrl: './item.component.html',
  styles: [`.listItem { cursor: pointer; }`]
})
export class MasterItemComponent implements AfterViewInit {
  @Input() index: number;
  @Output() onSelected = new EventEmitter<number>();

  @Input() component: Type<any>;
  @ViewChild('ddd') insertPoint: any;

  constructor(private resolver: ComponentFactoryResolver) {

    // let viewContainerRef = this.insertPoint.viewContainerRef;
    // viewContainerRef.clear();
    // let componentRef = viewContainerRef.createComponent(componentFactory);

  }


  select() {
    this.onSelected.emit(this.index);
  }

  ngAfterViewInit() {
    if (this.component !== undefined) {
      // let componentFactory = this.compiler.resolveComponentFactory(CoreModule.registry.get(this.itemComponentType));
      let componentFactory = this.resolver.resolveComponentFactory(this.component);
    }
  }

}
