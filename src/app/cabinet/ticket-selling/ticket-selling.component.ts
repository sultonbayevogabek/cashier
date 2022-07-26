import {
   Component,
   ElementRef,
   OnInit,
   ViewChild,
   QueryList,
   ViewChildren
} from '@angular/core'
import { DatesService } from '../shared/services/dates.service'
import { Title } from '@angular/platform-browser'
import { removeNonNumerics } from '../shared/functions/remove-non-numerics.function'
import { ToastrService } from 'ngx-toastr'
import { ApiService } from 'src/app/shared/services/api.service'
import { getNotStandardCar } from '../shared/functions/get-not-standard.function'
import { markFreeReservedSeats } from '../shared/functions/mark-free-reserved-seats.function'
import { Router } from '@angular/router'

@Component({
   selector: 'app-ticket-selling',
   templateUrl: './ticket-selling.component.html',
   styleUrls: ['./ticket-selling.component.scss']
})

export class TicketSellingComponent implements OnInit {
   /* SEARCH PANEL */
   public isChrome = true

   public departureStationCode = '2900000'
   public departureStationValue = 'ТАШКЕНТ'
   public departureStationInputFocus = false

   public arrivalStationCode = '2900700'
   public arrivalStationValue = 'САМАРКАНД'
   public arrivalStationInputFocus = false

   public searchingStationList: Array<any> = []
   public forwardDate = this.dateService.getCurrentDate()
   public backwardDate = ''
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

   /* TRAINS LIST */
   public forwardTrains: Array<any> = []
   public forwardTrainsClone: Array<any> = []
   public forwardAvailableCarTypesFilter: Array<any> = []
   public selectedForwardCarType = ''
   public selectedForwardCar: any = null

   public backwardTrains: Array<any> = []
   public backwardTrainsClone: Array<any> = []
   public backwardAvailableCarTypesFilter: Array<any> = []
   public selectedBackwardCarType = ''
   public selectedBackwardCar: any = null

   public passRouteForward: any
   public passRouteBackward: any

   /* CAR SCHEME */
   public carSchemePanelOpen = false
   public freeSeatsList: Array<any> = []
   public notStandard: any = null
   public carType = ''

   constructor(
      public dateService: DatesService,
      private title: Title,
      private toasterService: ToastrService,
      private apiService: ApiService,
      private router: Router
   ) {
      this.title.setTitle('Продажа билетов')
   }

   ngOnInit(): void {
      if (navigator.appVersion.indexOf('Chrome/') === -1) {
         this.isChrome = false
      }
      this.departureStationInput.nativeElement.focus()
      this.getTrains()
   }

   /* SEARCH PANEL */
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

      const searchingData = {
         direction: [
            {
               depDate: this.dateService.formatDateWithDot(this.forwardDate),
               fullday: true,
               type: 'Forward'
            }
         ],
         stationFrom: this.departureStationCode,
         stationTo: this.arrivalStationCode,
         showWithoutPlaces: 0
      }

      if (this.backwardDate) {
         searchingData.direction.push({
            depDate: this.dateService.formatDateWithDot(this.backwardDate),
            fullday: true,
            type: 'Backward'
         })
      }

      this.forwardAvailableCarTypesFilter = this.backwardAvailableCarTypesFilter = []
      this.selectedForwardCar = this.selectedBackwardCar = null

      this.apiService.getTrainsListApi(searchingData).subscribe(res => {
         if (res.express.direction[0].trains && res.express.direction[0].trains[0].train.length) {
            this.forwardTrains = this.forwardTrainsClone = res.express.direction[0].trains[0].train
            this.passRouteForward = res.express.direction[0].passRoute
            localStorage.setItem('passRouteForward', JSON.stringify(this.passRouteForward))
            this.createTrainsFilterData(this.forwardTrains, this.forwardAvailableCarTypesFilter)
         }

         if (res.express.direction[1]?.trains && res.express.direction[1]?.trains[0].train.length) {
            this.backwardTrains = this.backwardTrainsClone = res.express.direction[1].trains[0].train
            this.passRouteBackward = res.express.direction[1].passRoute
            localStorage.setItem('passRouteBackward', JSON.stringify(this.passRouteBackward))
            this.createTrainsFilterData(this.backwardTrains, this.backwardAvailableCarTypesFilter)
         }
      })
   }

   /* TRAINS LIST */
   calculateCarTypesAndPrices(carTypes: any): Array<any> {
      carTypes.forEach((carType: any) => {
         carType.prices = []
         carType.tariffs.tariff.forEach((item: any) => {
            const price = parseInt(item.tariff) + parseInt(item.comissionFee)
            if (!carType.prices.includes(price)) {
               carType.prices.push(price)
            }
         })
      })
      return carTypes
   }

   createTrainsFilterData(trainsArray: Array<any>, filterArray: Array<any>) {
      trainsArray.forEach((train: any) => {
         train.places.cars.forEach((carType: any) => {
            const index = filterArray.findIndex((item: any) => item.carType === carType.type)
            if (index > -1) {
               filterArray[index].freeSeats += +carType.freeSeats
               return
            }
            filterArray.push({
               carType: carType.type,
               freeSeats: +carType.freeSeats,
               active: false
            })
         })
      })
   }

   filterTrains(carType: string, direction: string) {
      if (direction === 'Forward') {
         const idx = this.forwardAvailableCarTypesFilter.findIndex((i: any) => i.carType === carType)
         this.forwardAvailableCarTypesFilter[idx].active = !this.forwardAvailableCarTypesFilter[idx].active
         const tempTrains: Array<any> = []
         if (this.forwardAvailableCarTypesFilter.some((i: any) => i.active)) {
            this.forwardAvailableCarTypesFilter.forEach((item: any) => {
               if (item.active) {
                  this.forwardTrainsClone.forEach((train: any) => {
                     if (train.places.cars.findIndex((i: any) => i.type === item.carType) > -1 && !tempTrains.some((i: any) => i.number === train.number)) {
                        tempTrains.push(train)
                     }
                  })
               }
            })
            this.forwardTrains = tempTrains
         } else {
            this.forwardTrains = this.forwardTrainsClone
         }
      }
      const idx = this.backwardAvailableCarTypesFilter.findIndex((i: any) => i.carType === carType)
      this.backwardAvailableCarTypesFilter[idx].active = !this.backwardAvailableCarTypesFilter[idx].active
      const tempTrains: Array<any> = []
      if (this.backwardAvailableCarTypesFilter.some((i: any) => i.active)) {
         this.backwardAvailableCarTypesFilter.forEach((item: any) => {
            if (item.active) {
               this.backwardTrainsClone.forEach((train: any) => {
                  if (train.places.cars.findIndex((i: any) => i.type === item.carType) > -1 && !tempTrains.some((i: any) => i.number === train.number)) {
                     tempTrains.push(train)
                  }
               })
            }
         })
         this.backwardTrains = tempTrains
      } else {
         this.backwardTrains = this.backwardTrainsClone
      }
   }

   getAvailableCars(train: any, direction: string, carType: string, i: number) {
      this.unSelectAllCars(direction)

      if (direction === 'Forward') {
         this.selectedForwardCarType = carType
         this.selectedForwardCar = null
         this.forwardTrains.forEach((item: any, index) => {
            item.places.cars.forEach((carType: any) => {
               carType.active = false
            })
            if (index === i) {
               item.showCars = true
               return
            }
            item.showCars = false
         })
      } else {
         this.selectedBackwardCar = null
         this.selectedBackwardCarType = carType
         this.backwardTrains.forEach((item: any, index) => {
            item.places.cars.forEach((carType: any) => {
               carType.active = false
            })
            if (index === i) {
               item.showCars = true
               return
            }
            item.showCars = false
         })
      }

      if (!train.availableCarTypes) {
         const searchingData = {
            direction: [
               {
                  depDate: direction === 'Forward' ? this.dateService.formatDateWithDot(this.forwardDate) : this.dateService.formatDateWithDot(this.backwardDate),
                  fullday: true,
                  type: 'Forward',
                  train: { number: train.number }
               }
            ],
            stationFrom: direction === 'Forward' ? this.departureStationCode : this.arrivalStationCode,
            stationTo: direction !== 'Backward' ? this.arrivalStationCode : this.departureStationCode
         }
         this.apiService.getAvailablePlacesApi(searchingData).subscribe(res => {
            train.availableCarTypes = res.direction[0].trains[0].train.cars
         }, _ => {
         })
      }
   }

   getFreeSeatsCount(placesList: string): number {
      return placesList.split(',').length
   }

   selectCar(train: any, carType: string, carNumber: string, carPlaces: string, direction: string) {
      const freeSeats = carPlaces.split(',')
      const carData = {
         train: {
            number: train.number
         },
         car: {
            type: carType,
            number: carNumber
         },
         requirements: {
            seatsRange: `${parseInt(freeSeats[0])}-${parseInt(freeSeats[freeSeats.length - 1])}`
         }
      }
      this.unSelectAllCars(direction)

      if (direction === 'Forward') {
         this.selectedForwardCar = carData
         localStorage.setItem('selectedForwardTrain', JSON.stringify(train))
      } else {
         this.selectedBackwardCar = carData
         localStorage.setItem('selectedBackwardTrain', JSON.stringify(train))
      }
   }

   unSelectAllCars(direction: string) {
      if (direction === 'Forward') {
         this.forwardTrains.forEach((train: any) => {
            if (train.availableCarTypes) {
               train.availableCarTypes.forEach((carType: any) => {
                  carType.car.forEach((car: any) => car.selected = false)
               })
            }
         })
      }
      if (direction === 'Backward') {
         this.backwardTrains.forEach((train: any) => {
            if (train.availableCarTypes) {
               train.availableCarTypes.forEach((carType: any) => {
                  carType.car.forEach((car: any) => car.selected = false)
               })
            }
         })
      }
   }

   /* CAR SCHEME */
   openCarSchemeModal(
      trainBrand: string,
      carNumber: string,
      trainNumber: string,
      classService: string,
      seatsCount: string,
      carType: string,
      places: string
   ) {
      this.carSchemePanelOpen = true
      this.carType = carType
      this.freeSeatsList = places.split(',')
      this.notStandard = getNotStandardCar(
         trainBrand,
         parseInt(carNumber),
         trainNumber,
         classService,
         parseInt(seatsCount),
         carType
      )
   }

   continue() {
      if (!this.selectedForwardCar) {
         this.toasterService.warning('Выберите вагон для туда')
         return
      }

      if (this.backwardDate && !this.selectedBackwardCar) {
         this.toasterService.warning('Выберите вагон для обратно')
         return
      }

      const data = {
         backward: !!this.backwardDate,
         ordersRequest: [
            {
               stationFrom: this.departureStationCode,
               stationTo: this.arrivalStationCode,
               depDate: this.dateService.formatDateWithDot(this.forwardDate),
               ...this.selectedForwardCar
            }
         ],
         withInsurance: false,
         withSmsNotification: false,
         phone: '998',
         passengers: []
      }

      if (this.backwardDate) {
         data.ordersRequest.push({
            stationFrom: this.arrivalStationCode,
            stationTo: this.departureStationCode,
            depDate: this.dateService.formatDateWithDot(this.backwardDate),
            ...this.selectedBackwardCar
         })
      } else {
         localStorage.removeItem('selectedBackwardTrain')
         localStorage.removeItem('passRouteBackward')
      }

      localStorage.setItem('data', JSON.stringify(data))
      this.router.navigate(['/cabinet/data-entry'])
   }
}
