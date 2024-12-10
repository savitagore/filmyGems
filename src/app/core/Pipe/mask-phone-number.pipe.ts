import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPhoneNumber',
  standalone: true,
})
export class MaskPhoneNumberPipe implements PipeTransform {
  transform(
    value: string | number,
    maskType: 'password' | 'number' | 'text' = 'text'
  ): string {
    if (value) {
      const strValue = value.toString();

      if (maskType === 'password') {
        return '*'.repeat(strValue.length);
      }

      if (maskType === 'number') {
        if (strValue.length >= 10) {
          return (
            strValue.substring(0, 2) +
            '*********' +
            strValue.substring(strValue.length - 0)
          );
        }
        if (strValue.length === 6) {
          return (
            strValue.substring(0, 1) +
            '****' +
            strValue.substring(strValue.length - 1)
          );
        }

        return strValue;
      }

      if (maskType === 'text') {
        return strValue.substring(0, 3) + '...';
      }
    }

    return value.toString();
  }
}
