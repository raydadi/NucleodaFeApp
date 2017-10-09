import { Component, Input } from '@angular/core';

/**
 * Generated class for the LoadingSpinnerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'loading-spinner',
  templateUrl: 'loading-spinner.html'
})
export class LoadingSpinnerComponent {
  @Input('align') align: string;
  @Input('color') color: string;
  @Input('margin') margin: string;

  constructor() {

  }

  ngAfterViewInit() {
    console.log(this.align);
  }

}
