import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0,20);
  }

  //// a pozivamo u  komponenti primer {{nesto | naziv pipa}}
}
