import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CabinetComponent } from './cabinet.component'
import { PageNotFoundComponent } from '../404-page/404-page.component'
import { TicketSellingComponent } from './ticket-selling/ticket-selling.component'
import { TicketRefundComponent } from './ticket-refund/ticket-refund.component'
import { TrainScheduleComponent } from './train-schedule/train-schedule.component'
import { TicketReportsComponent } from './ticket-reports/ticket-reports.component'
import { SettingsComponent } from './settings/settings.component'
import { DataEntryComponent } from './data-entry/data-entry.component'

const routes: Routes = [
   {
      path: '',
      component: CabinetComponent,
      children: [
         {
            path: 'ticket-selling',
            component: TicketSellingComponent
         },
         {
            path: 'ticket-refund',
            component: TicketRefundComponent
         },
         {
            path: 'train-schedule',
            component: TrainScheduleComponent
         },
         {
            path: 'ticket-reports',
            component: TicketReportsComponent
         },
         {
            path: 'settings',
            component: SettingsComponent
         },
         {
            path: 'data-entry',
            component: DataEntryComponent
         },
         {
            path: '404',
            component: PageNotFoundComponent
         },
         {
            path: '**',
            redirectTo: '404'
         }
      ]
   }
]

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})

export class CabinetRoutingModule {
}
