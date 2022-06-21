import { Component, OnInit } from '@angular/core'
import { DatesService } from '../shared/services/dates.service'
import { Title } from '@angular/platform-browser'

@Component({
   selector: 'app-ticket-selling',
   templateUrl: './ticket-selling.component.html',
   styleUrls: ['./ticket-selling.component.scss']
})

export class TicketSellingComponent implements OnInit {
   public isChrome = true

   public departureStation = ''
   public arrivalStation = ''
   public forwardDate = this.dateService.getCurrentDate()
   public backwardDate = ''
   public passengersCount = 1

   constructor(
      public dateService: DatesService,
      private title: Title
   ) {
      this.title.setTitle('Продажа билетов')
   }

   ngOnInit(): void {
      if (navigator.appVersion.indexOf('Chrome/') === -1) {
         this.isChrome = false
      }
   }
}
