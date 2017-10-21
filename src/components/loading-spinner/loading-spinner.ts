import { Component, Input } from '@angular/core';

/**
    Mais componentes: http://tobiasahlin.com/spinkit/
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

}
