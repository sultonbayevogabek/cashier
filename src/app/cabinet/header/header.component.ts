import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/shared/services/auth.service'

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
   public today = new Date()
   public fullScreen = false

   constructor(
      public authService: AuthService
   ) {
   }

   ngOnInit(): void {
      setInterval(() => {
         this.today = new Date()
      }, 1000)

      document.addEventListener('fullscreenchange', () => {
         this.fullScreen = !!document.fullscreenElement
      })
   }

   toggleScreen() {
      const elem: any = document.querySelector('.cabinet')

      if (!document.fullscreenElement) {
         this.fullScreen = true

         if (elem.requestFullscreen) {
            elem.requestFullscreen()
            return
         }

         if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen()
            return
         }

         if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen()
            return
         }
      }

      document.exitFullscreen().then()
      this.fullScreen = false
   }
}
