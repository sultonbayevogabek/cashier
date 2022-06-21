import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { LoginRequestData } from '../interfaces'
import { environment } from 'src/environments/environment'
import { JwtHelperService } from '@auth0/angular-jwt'
import { Observable } from 'rxjs/internal/Observable'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'

const JWT = new JwtHelperService()

@Injectable({
   providedIn: 'root'
})

export class AuthService {
   constructor(
      private http: HttpClient,
      private router: Router,
      private toasterService: ToastrService,
   ) {
   }

   getToken(): string | null {
      return sessionStorage.getItem('token')
   }

   login(username: string, password: string) {
      if (username === 'sultonbayevogabek@gmail.com' && password === 'Ogabek19991031') {
         sessionStorage.setItem('username', 'sultonbayevogabek@gmail.com')
         sessionStorage.setItem('role', 'cashier')
         this.router.navigate(['/cabinet/ticket-selling']).then()
      } else {
         this.toasterService.error('Логин или пароль неверно!')
      }
   }

   isCashier(): boolean {
      return sessionStorage.getItem('role') === 'cashier'
   }
}
