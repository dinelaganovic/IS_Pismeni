import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: string): number {
    const wordToNumber = {
      'jedan': 1,
      'dva': 2,
      'tri': 3,
      'četiri': 4,
      'pet': 5
    };
    const lowercaseValue = value.toLowerCase();
    return 0;
  }

}
