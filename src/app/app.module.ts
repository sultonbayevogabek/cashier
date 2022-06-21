import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { LOCALE_ID, NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PageNotFoundComponent } from './404-page/404-page.component'
import { Interceptor } from './shared/interceptor'
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { registerLocaleData } from '@angular/common'
import localeRu from '@angular/common/locales/ru'

registerLocaleData(localeRu)

@NgModule({
   declarations: [
      AppComponent,
      PageNotFoundComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      ToastrModule.forRoot(),
      BrowserAnimationsModule
   ],
   providers: [
      { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
      { provide: LOCALE_ID, useValue: 'ru' }
   ],
   bootstrap: [AppComponent]
})

export class AppModule {
}
