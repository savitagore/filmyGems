import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPhoneNumber',
  standalone: true
})
export class MaskPhoneNumberPipe implements PipeTransform {
  transform(value: string): string {
    if (value && value.length >= 10) {
      return value.substring(0, 2) + '*********' + value.substring(value.length - 0);
    }
    return value;
  }
}
