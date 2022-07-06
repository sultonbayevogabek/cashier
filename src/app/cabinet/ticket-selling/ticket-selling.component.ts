import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
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
   public stationMask = ['2', '9', '0', '0', /\d/, /\d/, /\d/]

   @ViewChild('departureStationInput', { static: true }) departureStationInput: any
   @ViewChild('arrivalStationInput', { static: true }) arrivalStationInput: any

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
      this.departureStationInput.nativeElement.focus()
   }
}
