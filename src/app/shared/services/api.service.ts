import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
   providedIn: 'root'
})

export class ApiService {
   constructor(
      private http: HttpClient,
      private toaster: ToastrService
   ) {}
}
