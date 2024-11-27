import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class SignupvalidationService {


  constructor() {}

  getFullNameErrorMessage(control: AbstractControl): string {
    if (control.hasError('required')) {
      return 'Full Name is required.';
    } else if (control.hasError('minlength')) {
      return 'Full Name must be at least 5 characters long.';
    }
    return '';
  }
  getMobileErrorMessage(control: AbstractControl): string {
    if (control.hasError('required')) {
      return 'Mobile number is required.';
    } else if (control.hasError('pattern')) {
      return 'Mobile number must be 10 digits.';
    }
    return '';
  }

  getEmailErrorMessage(control: AbstractControl): string {
    if (control.hasError('required')) {
      return 'Email is required.';
    } else if (control.hasError('pattern')) {
      return 'Please enter a valid email.';
    }
    return '';
  }
  checkPasswordPattern(control: AbstractControl): boolean {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordPattern.test(control.value);
  }



  getPasswordPatternErrorMessage(): string {
    return 'At least one letter, one number, and one special character are required.';
  }

  checkPasswordsMatch(password: AbstractControl, confirmPassword: AbstractControl): boolean {
    return password.value === confirmPassword.value;
  }

  getPasswordMismatchErrorMessage(): string {
    return 'Passwords do not match.';
  }
}
