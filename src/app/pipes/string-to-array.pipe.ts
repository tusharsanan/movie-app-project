import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stringToArray', standalone: true })
export class StringToArrayPipe implements PipeTransform {
  transform(value: string): string[] {
    return value.split(',');
  }
}
