import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'showCharacters', standalone: true })
export class ShowCharactersPipe implements PipeTransform {
  transform(value: string, togglePipe: boolean, plotType: string): any {
    return value.length > 200 && togglePipe && plotType === 'full'
      ? value.substring(0, 200) + '...'
      : value;
  }
}
