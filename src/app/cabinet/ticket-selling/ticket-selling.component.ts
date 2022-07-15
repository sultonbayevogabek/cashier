import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { DatesService } from '../shared/services/dates.service'
import { Title } from '@angular/platform-browser'
import { removeNonNumerics } from '../shared/functions/remove-non-numerics.function'
import { ToastrService } from 'ngx-toastr'
import { ApiService } from 'src/app/shared/services/api.service'

@Component({
   selector: 'app-ticket-selling',
   templateUrl: './ticket-selling.component.html',
   styleUrls: ['./ticket-selling.component.scss']
})

export class TicketSellingComponent implements OnInit {
   public isChrome = true

   public departureStationCode = ''
   public departureStationValue = ''
   public departureStationInputFocus = false

   public arrivalStationCode = ''
   public arrivalStationValue = ''
   public arrivalStationInputFocus = false

   public searchingStationList: Array<any> = []
   public forwardDate = this.dateService.getCurrentDate()
   public backwardDate = ''
   public passengersCount = 1
   public popularStations = [
      { name: 'ТАШКЕНТ', code: '2900000' },
      { name: 'САМАРКАНД', code: '2900700' },
      { name: 'БУХАРА', code: '2900800' },
      { name: 'ХИВА', code: '2900172' },
      { name: 'УРГЕНЧ', code: '2900790' },
      { name: 'НУКУС', code: '2900970' },
      { name: 'НАВОИ', code: '2900930' },
      { name: 'АНДИЖАН', code: '2900680' },
      { name: 'КАРШИ', code: '2900750' },
      { name: 'ДЖИЗАК', code: '2900720' },
      { name: 'ТЕРМЕЗ', code: '2900255' },
      { name: 'ГУЛИСТАН', code: '2900850' }
   ]

   @ViewChild('departureStationInput', { static: true }) departureStationInput: any
   @ViewChild('arrivalStationInput', { static: true }) arrivalStationInput: any
   @ViewChild('forwardDateInput', { static: true }) forwardDateInput: any
   @ViewChild('backwardDateInput', { static: true }) backwardDateInput: any
   @ViewChild('passengersCountInput', { static: true }) passengersCountInput: any

   constructor(
      public dateService: DatesService,
      private title: Title,
      private toasterService: ToastrService,
      private apiService: ApiService
   ) {
      this.title.setTitle('Продажа билетов')
   }

   ngOnInit(): void {
      if (navigator.appVersion.indexOf('Chrome/') === -1) {
         this.isChrome = false
      }
      this.departureStationInput.nativeElement.focus()
   }

   dataChange(inputType: string): void {
      if (inputType === 'departure' && removeNonNumerics(this.departureStationValue).length) {
         this.departureStationCode = removeNonNumerics(this.departureStationValue)
         if (this.departureStationCode.length === 7) {
            this.arrivalStationInput.nativeElement.focus()
         }
      }

      if (inputType === 'departure' && !removeNonNumerics(this.departureStationValue).length) {
         this.departureStationCode = ''
         if (this.departureStationValue.trim().length < 3) {
            this.searchingStationList = []
            return
         }
         this.apiService.searchStation(this.departureStationValue.trim()).subscribe(res => {
            this.searchingStationList = res.station || []
         })
      }

      if (inputType === 'arrival' && removeNonNumerics(this.arrivalStationValue).length) {
         this.arrivalStationCode = removeNonNumerics(this.arrivalStationValue)
         if (this.arrivalStationCode.length === 7) {
            this.forwardDateInput.nativeElement.focus()
         }
      }

      if (inputType === 'arrival' && !removeNonNumerics(this.arrivalStationValue).length) {
         this.arrivalStationCode = ''
         if (this.arrivalStationValue.trim().length < 3) {
            this.searchingStationList = []
            return
         }
         this.apiService.searchStation(this.arrivalStationValue.trim()).subscribe(res => {
            this.searchingStationList = res.station || []
         })
      }
   }

   setStationFromSearchingStations(stationType: string, stationName: string, stationCode: string) {
      if (stationType === 'departure') {
         this.departureStationValue = stationName
         this.departureStationCode = stationCode
         this.searchingStationList = []
         this.arrivalStationInput.nativeElement.focus()
      }

      if (stationType === 'arrival') {
         this.arrivalStationValue = stationName
         this.arrivalStationCode = stationCode
         this.searchingStationList = []
         this.forwardDateInput.nativeElement.focus()
      }
   }

   setStationFromPopularStations(name: string, code: string) {
      this.arrivalStationInputFocus = this.departureStationInputFocus = false
      this.searchingStationList = []

      if (this.departureStationCode.length === 7 && this.arrivalStationCode.length === 7) {
         this.arrivalStationValue = ''
         this.arrivalStationCode = ''
         this.departureStationValue = name
         this.departureStationCode = code
         return
      }

      if (this.departureStationCode.length !== 7) {
         this.departureStationValue = name
         this.departureStationCode = code
         return
      }

      if (this.arrivalStationCode.length !== 7) {
         this.arrivalStationValue = name
         this.arrivalStationCode = code
         this.forwardDateInput.nativeElement.focus()
         return
      }
   }

   getTrains() {
      if (this.departureStationCode.length !== 7) {
         this.toasterService.warning('Введите код станции отправления')
         this.departureStationInput.nativeElement.focus()
         return
      }

      if (this.arrivalStationCode.length !== 7) {
         this.toasterService.warning('Введите код станции прибытия')
         this.arrivalStationInput.nativeElement.focus()
         return
      }

      if (this.departureStationCode === this.arrivalStationCode) {
         this.toasterService.warning('Выбраны одинаковые станции')
         this.arrivalStationInput.nativeElement.focus()
         return
      }

      if (this.backwardDate && new Date(this.forwardDate).getTime() >= new Date(this.backwardDate).getTime()) {
         this.toasterService.warning('Дата туда должна быть более ранней, чем даты обратного')
         this.backwardDateInput.nativeElement.focus()
         return
      }

      if (this.passengersCount < 1 || this.passengersCount > 4) {
         this.toasterService.warning('Введите количество пассажиров от 1 до 4')
         this.passengersCountInput.nativeElement.focus()
         return
      }

      const searchingData = {
         direction: [
            {
               depDate: this.dateService.formatDateWithDot(this.forwardDate),
               fullday: true,
               type: "Forward"
            }
         ],
         stationFrom: this.departureStationCode,
         stationTo: this.arrivalStationCode
      }

      if (this.backwardDate) {
         searchingData.direction.push({
            depDate: this.dateService.formatDateWithDot(this.backwardDate),
            fullday: true,
            type: "Backward"
         })
      }

      this.apiService.getTrainsListApi(searchingData).subscribe(res => {
         console.log(res)
      })
   }
}
