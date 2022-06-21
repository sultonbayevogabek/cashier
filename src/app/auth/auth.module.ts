import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      }
    ])
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: []
})

export class AuthModule {}
