import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { AuthService } from '../shared/services/auth.service'

@Component({
   selector: 'app-404-page',
   templateUrl: './404-page.component.html',
   styleUrls: ['./404-page.component.scss']
})

export class PageNotFoundComponent implements OnInit {
   constructor(
      private title: Title,
      public authService: AuthService
   ) {
      this.title.setTitle('Страница не найдена!')
   }

   ngOnInit(): void {

   }
}
