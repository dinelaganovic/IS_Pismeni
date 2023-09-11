import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe_promena_boje'
})
export class Pipe_promena_bojePipe implements PipeTransform {

  transform(dateString: string): string {

    const datum = new Date();
    const datumAktivnosti = new Date(dateString);

    if(datum.getDate() > datumAktivnosti.getDate())
    {
      return 'red';
    }
    else if(datum.getDate() < datumAktivnosti.getDate())
    {
      return 'blue';
    }
    else
    {
      return 'yellow';
    }
  }

}
