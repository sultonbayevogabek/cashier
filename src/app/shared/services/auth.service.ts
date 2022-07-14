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
      return localStorage.getItem('token')
   }

   login(username: string, password: string) {
      this.http.post(environment.host + '/api/v1/auth/login', { username, password }).subscribe((res: any) => {
         if (res.roles.includes('SUPER_ADMIN')) {
            localStorage.setItem('token', res.token)
            this.router.navigate(['/cabinet/ticket-selling'])
            return
         }
         this.toasterService.error('Логин или пароль неверный')
      }, _ => {
         this.toasterService.error('Логин или пароль неверный')
      })
   }

   getRoles(): string {
      if (this.getToken()) {
         try {
            return JWT.decodeToken(this.getToken() || '').role
         } catch (e) {
            return ''
         }
      }
      return ''
   }

   getUsername(): string {
      if (this.getToken()) {
         try {
            return JWT.decodeToken(this.getToken() || '').sub
         } catch (e) {
            return ''
         }
      }
      return ''
   }

   isSuperAdmin(): boolean {
      return this.getRoles().includes('SUPER_ADMIN')
   }
}
