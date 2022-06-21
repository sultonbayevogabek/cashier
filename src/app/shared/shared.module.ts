import { NgModule, Injectable } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { AuthService } from './services/auth.service'

@Injectable()

@NgModule({
  imports: [
    ReactiveFormsModule,
    NgbPaginationModule,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    NgbPaginationModule,
    FormsModule
  ],
  providers: [
    AuthService
  ]
})

export class SharedModule {
}
