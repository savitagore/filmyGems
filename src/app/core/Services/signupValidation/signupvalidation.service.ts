import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class SignupvalidationService {

  errorMessage: string = '';
  constructor() {}

  // validateOtp(otp: string): boolean {
  //   const otpRegex = /^[0-9]{6}$/;
  //   if (otpRegex.test(otp)) {
  //     this.errorMessage = '';
  //     return true;
  //   } else {
  //     this.errorMessage = 'Invalid OTP. Please enter a 6-digit code.';
  //     return false;
  //   }
  // }
  // validateOtp(otp: string): boolean {
  //   const otpRegex = /^[0-9]{6}$/;
  //    if (otpRegex.test(otp)) {
  //     this.errorMessage = '';
  //     return true;
  //   } else {
  //     this.errorMessage = 'Invalid OTP. Please enter a 6-digit code.';
  //     return false;
  //   }
  // }


  getErrorMessage(): string {
    return this.errorMessage;
  }


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
