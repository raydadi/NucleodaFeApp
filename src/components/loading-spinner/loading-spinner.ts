import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello LoadingSpinnerComponent Component');
    this.text = 'Hello World';
  }

}
