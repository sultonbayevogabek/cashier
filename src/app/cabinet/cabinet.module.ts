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
import { TextMaskModule } from 'angular2-text-mask';
import { NotStandard11Component } from './shared/schemes/not-standard11/not-standard11.component'

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
      NotStandard11Component
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
