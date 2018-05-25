import { Component } from '@angular/core';

/**
 * Generated class for the PasswordValidationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'password-validation',
  templateUrl: 'password-validation.html'
})
export class PasswordValidationComponent {

  text: string;

  constructor() {
    console.log('Hello PasswordValidationComponent Component');
    this.text = 'Hello World';
  }

}
