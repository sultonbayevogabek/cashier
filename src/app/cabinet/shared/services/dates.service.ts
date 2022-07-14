import { Injectable } from '@angular/core'
import { formatDate } from '@angular/common'

@Injectable({
   providedIn: 'root'
})

export class DatesService {
   getCurrentDate(): string {
      return formatDate(new Date(), 'YYYY-MM-dd', 'en')
   }

   getTomorrowDate(): string {
      let date = new Date()
      date.setDate(date.getDate() + 1)
      return formatDate(date, 'YYYY-MM-dd', 'en')
   }

   getOneMonthAgoDate(): string {
      let date = new Date()
      date.setMonth(date.getMonth() - 1)
      return formatDate(date, 'YYYY-MM-dd', 'en')
   }

   getFirstDayOfYear(): string {
      return `${new Date().getFullYear()}-01-01`
   }

   formatDateWithDot(date: string): string {
      return `${date.substring(8)}.${date.substring(5, 7)}.${date.substring(0, 4)}`
   }
}
