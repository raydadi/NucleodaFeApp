import { AbstractControl, ValidatorFn } from '@angular/forms';

//Validation used for the email on the user account
export function ValidateEmail (): ValidatorFn {

  return (control: AbstractControl): {[key: string]: any} => {
    const emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    var isValid = emailRegex.test(control.value);

    if (isValid){
      return null;
    }
    else {
      return { ValidateEmailOutput: true};
    }
  };
}
