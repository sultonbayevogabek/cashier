import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../shared/services/auth.service'

@Component({
   selector: 'app-sidebar',
   templateUrl: './sidebar.component.html',
   styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
   public isSidebarOpen = true

   constructor(
      public authService: AuthService
   ) {}

   ngOnInit() {
      if (localStorage.getItem('isSidebarOpen')) {
         // @ts-ignore
         this.isSidebarOpen = JSON.parse(localStorage.getItem('isSidebarOpen'))
      }
   }

   toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
      localStorage.setItem('isSidebarOpen', JSON.stringify(this.isSidebarOpen))
   }
}
