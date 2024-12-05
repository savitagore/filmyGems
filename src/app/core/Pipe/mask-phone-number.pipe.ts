import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPhoneNumber',
  standalone: true
})
export class MaskPhoneNumberPipe implements PipeTransform {
  // transform(value: string): string {
  //   if (value && value.length >= 10) {
  //     return value.substring(0, 2) + '*********' + value.substring(value.length - 0);
  //   }
  //   return value;
  // }
  // transform(value: string | number, maskType: 'password' | 'number' | 'text' = 'text'): string {
  //   if (value) {
  //     const strValue = value.toString();
  //     if (maskType === 'password') {
  //       return '*'.repeat(strValue.length);
  //     }

  //     if (maskType === 'number') {
  //       debugger
  //       if (strValue.length >= 10) {
  //         return strValue.substring(0, 2) + '*********' + strValue.substring(strValue.length - 0);
  //       }
  //       return strValue;
  //     }

  //     if (maskType === 'text') {
  //       return strValue.substring(0, 3) + '...';
  //     }
  //   }

  //   return value.toString();
  // }
  transform(value: string | number, maskType: 'password' | 'number' | 'text' = 'text'): string {

    if (value) {
      const strValue = value.toString();

      if (maskType === 'password') {
        return '*'.repeat(strValue.length);
      }

      if (maskType === 'number') {
        // For mobile numbers (10 digits)
        if (strValue.length >= 10) {
          return strValue.substring(0, 2) + '*********' + strValue.substring(strValue.length - 0);
        }

        // For OTP (6 digits)
        if (strValue.length === 6) {
          return strValue.substring(0, 1) + '****' + strValue.substring(strValue.length - 1);
        }

        return strValue;  // If the length is less than 10 (or 6), return the original value
      }

      if (maskType === 'text') {
        return strValue.substring(0, 3) + '...';
      }

    }

    return value.toString();
  }



}



