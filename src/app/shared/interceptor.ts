import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { throwError as observableThrowError, catchError, map } from 'rxjs'
import { environment } from '../../environments/environment'
import { LoaderService } from '../cabinet/shared/services/loader.service'
import { AuthService } from './services/auth.service'
import { ToastrService } from 'ngx-toastr'

@Injectable()

export class Interceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private loaderService: LoaderService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let requestHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })

    const token = this.authService.getToken()
    if (token && request.url !== environment.host + '/api/v1/auth/login') {
      requestHeaders = requestHeaders.append('Authorization', 'Bearer ' + token)
    }

    let authRequest = request.clone({
      headers: requestHeaders
    })

    if (request.url.includes('/pdf') || request.url.includes('Pdf')) {
      requestHeaders = requestHeaders.append('Accept', 'application/octet-stream')
      authRequest = request.clone({
        responseType: 'blob' as 'json',
        headers: requestHeaders
      })
    }

    this.loaderService.showLoader()

    return next.handle(authRequest).pipe(catchError(err => {
      if (err.status === 401 || err.status === 0) {
        if (!request.url.includes('/login')) {
          this.toaster.error('Please login!')
        }

        this.router.navigate(['login']).then()
      }
      this.loaderService.hideLoader()
      return observableThrowError(() => err)
    })).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.loaderService.hideLoader()
      }
      return event
    }))
  }
}
