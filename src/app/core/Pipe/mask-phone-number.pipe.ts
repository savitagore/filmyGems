import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPhoneNumber',
  standalone: true
})
export class MaskPhoneNumberPipe implements PipeTransform {

  transform(value: string): string {
    debugger
    if (value && value.length >= 10) {
      return value.substring(0, 5) + '****' + value.substring(value.length - 2);
    }
    return value;
  }

}
