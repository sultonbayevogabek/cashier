import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
   name: 'sortCarType'
})

export class SortCarTypePipe implements PipeTransform {
   transform(carTypes: Array<any>, selectedCarType: string): Array<any> {
      return carTypes.filter((i: any) => i.type === selectedCarType)
   }
}
