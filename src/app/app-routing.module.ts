import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PageNotFoundComponent } from './404-page/404-page.component'
import { CashierGuard } from './shared/guards/cashier.guard'

const routes: Routes = [
   {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
   },
   {
      path: 'login',
      loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
   },
   {
      path: 'cabinet',
      loadChildren: () => import('./cabinet/cabinet.module').then(module => module.CabinetModule),
      canActivate: [CashierGuard]
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

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})

export class AppRoutingModule {
}
