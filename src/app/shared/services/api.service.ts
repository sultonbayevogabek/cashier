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
   ) {
   }

   searchStation(nameFull: string): Observable<any> {
      return this.http.post<any>(environment.host + '/api/v1/stations/list', { nameFull })
   }

   getTrainsListApi(searchingData: any): Observable<any> {
      return this.http.post<any>(environment.host + '/api/v1/trains/availability/space/between/stations', searchingData)
   }

   getAvailablePlacesApi(trainInfo: any): Observable<any> {
      return this.http.post<any>(environment.host + '/api/v1/trains/given/availability/place', trainInfo)
   }

   getPassportDataApi(): Observable<any> {
      return this.http.get('/mrz')
   }
}
