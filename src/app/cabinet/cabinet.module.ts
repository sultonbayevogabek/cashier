import { NgModule } from '@angular/core'
import { CabinetRoutingModule } from './cabinet-routing.module'
import { CabinetComponent } from './cabinet.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { LoaderComponent } from './loader/loader.component'
import { SharedModule } from '../shared/shared.module'
import { DatesService } from './shared/services/dates.service'
import { PaginationService } from './shared/services/pagination.service'
import { TotalDataComponent } from './shared/components/total-data/total-data.component'
import { TotalFilterComponent } from './shared/components/total-filter/total-filter.component'
import { ContentHeaderComponent } from './shared/components/content-header/content-header.component'
import { TicketSellingComponent } from './ticket-selling/ticket-selling.component'
import { TicketRefundComponent } from './ticket-refund/ticket-refund.component'
import { TrainScheduleComponent } from './train-schedule/train-schedule.component'
import { SettingsComponent } from './settings/settings.component'
import { TicketReportsComponent } from './ticket-reports/ticket-reports.component'
import { DataEntryComponent } from './data-entry/data-entry.component'
import { TextMaskModule } from 'angular2-text-mask'
import { NotStandard11Component } from './shared/schemes/not-standard11/not-standard11.component'
import { NotStandard13Component } from './shared/schemes/not-standard13/not-standard13.component'
import { NotStandard12Component } from './shared/schemes/not-standard12/not-standard12.component'
import { NotStandard14Component } from './shared/schemes/not-standard14/not-standard14.component'
import { NotStandard10Component } from './shared/schemes/not-standard10/not-standard10.component'
import { SeatedComponent } from './shared/schemes/seated/seated.component'
import { EconomClassComponent } from './shared/schemes/econom-class/econom-class.component'
import { CoupeComponent } from './shared/schemes/coupe/coupe.component'
import { Luxury20Component } from './shared/schemes/luxury20/luxury20.component'
import { NotStandard27Component } from './shared/schemes/not-standard27/not-standard27.component'
import { NotStandard23Component } from './shared/schemes/not-standard23/not-standard23.component'
import { NotStandard22Component } from './shared/schemes/not-standard22/not-standard22.component'
import { NotStandard16Component } from './shared/schemes/not-standard16/not-standard16.component'
import { NotStandard20Component } from './shared/schemes/not-standard20/not-standard20.component'
import { NotStandard26Component } from './shared/schemes/not-standard26/not-standard26.component'
import { NotStandard18Component } from './shared/schemes/not-standard18/not-standard18.component'
import { NotStandard21Component } from './shared/schemes/not-standard21/not-standard21.component'
import { NotStandard24Component } from './shared/schemes/not-standard24/not-standard24.component'
import { NotStandard15Component } from './shared/schemes/not-standard15/not-standard15.component'
import { NotStandard17Component } from './shared/schemes/not-standard17/not-standard17.component'
import { NotStandard19Component } from './shared/schemes/not-standard19/not-standard19.component'
import { NotStandard25Component } from './shared/schemes/not-standard25/not-standard25.component'
import { SoftComponent } from './shared/schemes/soft/soft.component'

@NgModule({
   declarations: [
      CabinetComponent,
      SidebarComponent,
      TotalDataComponent,
      TotalFilterComponent,
      ContentHeaderComponent,
      HeaderComponent,
      LoaderComponent,
      TicketSellingComponent,
      TicketRefundComponent,
      TrainScheduleComponent,
      SettingsComponent,
      TicketReportsComponent,
      DataEntryComponent,
      NotStandard11Component,
      NotStandard13Component,
      NotStandard12Component,
      NotStandard14Component,
      NotStandard10Component,
      SeatedComponent,
      EconomClassComponent,
      CoupeComponent,
      Luxury20Component,
      NotStandard27Component,
      NotStandard23Component,
      NotStandard22Component,
      NotStandard16Component,
      NotStandard20Component,
      NotStandard26Component,
      NotStandard18Component,
      NotStandard21Component,
      NotStandard24Component,
      NotStandard15Component,
      NotStandard17Component,
      NotStandard19Component,
      NotStandard25Component,
      SoftComponent
   ],
   imports: [
      CabinetRoutingModule,
      CommonModule,
      SharedModule,
      TextMaskModule
   ],
   providers: [
      DatesService,
      PaginationService
   ],
   bootstrap: []
})

export class CabinetModule {
}
