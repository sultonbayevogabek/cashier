import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
   name: 'sortCars'
})

export class SortCarsPipe implements PipeTransform {
   transform(value: Array<any>): Array<any> {
      return value.sort((a: any, b: any) => parseInt(a.number) - parseInt(b.number))
   }
}
